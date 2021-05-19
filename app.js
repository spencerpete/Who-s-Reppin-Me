const form = document.querySelector('form')
const repContianer = document.querySelector('.rep-container')
const myKey = config.myApiKey
// Function gathers data from Civiv info API
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
// This functions gathers needed data and attaches them to elemtentsthat will be appended to the DOM
const repData = (response) => {
  const offices = response.data.offices
  const officials = response.data.officials
  offices.forEach((element) => {
    const officialIndices = element.officialIndices
    let title = element.name
    officialIndices.forEach(element => {
      let websiteUrl = officials[element].urls[0]
      let name = officials[element].name
      let imgUrl = officials[element].photoUrl
      let phone = officials[element].phones[0]
      let showRepData = `
    <div class="rep-data">
      <img class='rep-img'src=${imgUrl} onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Greater_coat_of_arms_of_the_United_States.svg/270px-Greater_coat_of_arms_of_the_United_States.svg.png'">
      <div class='rep-info'>
        <h4 class='rep-info-contnt'>${title} :</br>${name}</h4>
        <h4 class='rep-info-contnt'>Website : <a href=${websiteUrl}>Rep site</a></h4>
        <h4 class='rep-info-contnt'>Contact : <a href='tel:'${phone}>${phone}</a></h4>
        <button class='rep-info-contnt' type="submit">Save Reps Info</button>
      </div>  
    </div>
    `
      repContianer.insertAdjacentHTML("beforeend", showRepData)
    });
  });
}
// Removes the data of the search from the DOM 
const removeReps = () => {
  while (repContianer.lastChild) {
    repContianer.removeChild(repContianer.lastChild)
  }
}
// removes article tage from the dome when a search is submitted
const removeArticle = () => {
  let article = document.querySelector('article')
  document.body.removeChild(article)
}
// event listener for the submit search button
form.addEventListener('submit', e => {
  e.preventDefault()
  removeReps()
  removeArticle()
  const inputValue = document.querySelector('#adress').value
  console.log(inputValue)
  fetchData(inputValue)
})
// event listener for the clear search results buttons
form.addEventListener('reset',removeReps)
