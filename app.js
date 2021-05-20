const repSearch = document.querySelector('.rep-search')
const form = document.querySelector('form')
const repContianer = document.querySelector('.rep-container')
const electionContainer = document.querySelector('.election-container')
const electionSearch = document.querySelector('.election-search')
const myKey = config.myApiKey
// Function gathers rep data from Civiv info API
const fetchData = async (input) => {
  const url = `https://www.googleapis.com/civicinfo/v2/representatives/?roles=headOfGovernment&roles=deputyHeadOfGovernment&roles=legislatorUpperBody&roles=legislatorLowerBody&address=${input}&key=${myKey}`
  try {
    const response = await axios.get(url)
    console.log(response)
    repData(response)
    return response
  } catch (error){
    console.error(error)
  }
}
// gathers election data from the Civic Info API
const fetchElectionData = async (input) => {
  const url = `https://civicinfo.googleapis.com/civicinfo/v2/voterinfo?address=${input}&officialOnly=true&returnAllAvailableData=true&key=${myKey}`
  try {
    const result = await axios.get(url)
    electionData(result)
    return result
    // return result 
  } catch (error) {
    console.error(error)
  }
}
const electionData = result => {
  let showElectionData;
  // the if statement sees if the users registered address has a upcoming election. if they do not it returns "no upcomg election" otherwise it returns the upcoming election data
  if (result.data.election == null) {
    showElectionData =`
    <div class='election-results'>
    <h3>Your Next Upcoming Election :</h3>
    <h4>You Have No Upcoming Elections</h4>
    `
  } else {
    const election = result.data.election.name
    let electionDay = new Date(result.data.election.electionDay)
    electionDay = electionDay.toDateString()
    const pollingLocation = result.data.pollingLocations[0].address
    const pollingCity = pollingLocation.city
    const pollingAdress = pollingLocation.line1
    const pollingState = pollingLocation.state
    const pollingZip = pollingLocation.zip
    const pollingBuilding = pollingLocation.locationName
    const pollingHours = result.data.pollingLocations[0].pollingHours
    showElectionData = `
    <div class='election-results'>
      <img class='vote' src="https://www.cochise.az.gov/sites/default/files/recorder/vote.png">
      <div class='e-info-container'>
        <h3>Your Next Upcoming Election :</h3>
        <h4 class='election-info'>Elction : ${election}</h4>
        <h4 class='election-info'>Day : ${electionDay}</h4>
        <h4 class='election-info'>Polling Place : ${pollingBuilding}, ${pollingAdress}, ${pollingCity} ${pollingState} ${pollingZip}</h4>
        <h4 class='election-info'>Hours : ${pollingHours}</h4>
        <button><a href="https://www.google.com/maps/search/${pollingAdress}${pollingCity}" target="">Find on Maps</a></button>
      </div>
    </div>
    `
  }
  electionContainer.insertAdjacentHTML("beforeend", showElectionData)
}
// This functions gathers needed data for the rep search and attaches them to elemtents that will be appended to the DOM
const repData = (response) => {
  const offices = response.data.offices
  const officials = response.data.officials
  offices.forEach((element) => {
    const officialIndices = element.officialIndices
    let title = element.name
    officialIndices.forEach(element => {
      let websiteUrl = officials[element].urls
      let name = officials[element].name
      let imgUrl = officials[element].photoUrl
      let phone = officials[element].phones
      let showRepData = `
    <div class="rep-data">
      <img class='rep-img'src=${imgUrl} onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Greater_coat_of_arms_of_the_United_States.svg/270px-Greater_coat_of_arms_of_the_United_States.svg.png'">
      <div class='rep-info'>
        <h4 class='rep-info-contnt' id='rep-name'>${title} :</br>${name}</h4>
        <h4 class='rep-info-contnt' id='rep-website'>Website : <a href=${websiteUrl}>Rep's website</a></h4>
        <h4 class='rep-info-contnt' id='rep-phone'>Contact : <a href='tel:'${phone}>${phone}</a></h4>
      </div>  
    </div>
    `
      repContianer.insertAdjacentHTML("beforeend", showRepData)
    });
  });
}
// Removes rep search results 
const removeReps = () => {
  while (repContianer.lastChild) {
    repContianer.removeChild(repContianer.lastChild)
  }
}
// removes election results
const removeElection = () => {
  while (electionContainer.lastChild) {
    electionContainer.removeChild(electionContainer.lastChild)
  }
}
// removes article tage from the dome when a search is submitted
const removeArticle = () => {
  let article = document.querySelector('article')
    document.body.removeChild(article)
}
// event listener for the election search buttom
electionSearch.addEventListener('click', () => {
  const inputValue = document.querySelector('#adress').value
  fetchElectionData(inputValue)
  removeReps()
  removeElection()
  removeArticle()
})
// event listener for the rep search button
form.addEventListener('submit', e => {
  e.preventDefault()
  removeReps()
  removeElection()
  const inputValue = document.querySelector('#adress').value
  fetchData(inputValue)
  removeArticle()
})
// event listener for the clear search results buttons
form.addEventListener('reset', () => {
  removeReps()
  removeElection()
})

// const saveBttn = document.querySelector('#save-bttn')

// const saveInfo = () => {
//   let repName = document.querySelector('#rep-name').textContent
//   let repWebsite = document.querySelector('#rep-website').textContent
//   let repPhone = document.querySelector('#rep-phone').textContent
//   localStorage.setItem('name', repName)
//   localStorage.setItem('website', repWebsite)
//   localStorage.setItem('phone', repPhone)
//   console.log(localStorage)
// }

// saveBttn.addEventListener('click', saveInfo)