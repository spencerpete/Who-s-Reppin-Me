# Who-s-Reppin-Me-

## App Description 
"Who's Reppin Me?" is a app that allows the user to serch their adress and see who represents them in the Federal, State, and Local governments. The user is provided with a list of the representatives, their photo, their title, their name, a link to their website and contact information. 
## Api 
I am using the 
[Civic Info API](https://developers.google.com/civic-information/docs/v2) 
## API Snipet 
```"officials": [
        {
            "name": "Joseph R. Biden",
            "address": [
                {
                    "line1": "1600 Pennsylvania Avenue Northwest",
                    "city": "Washington",
                    "state": "DC",
                    "zip": "20500"
                }
            ],
            "party": "Democratic Party",
            "phones": [
                "(202) 456-1111"
            ],
            "urls": [
                "https://www.whitehouse.gov/"
            ],
            "channels": [
                {
                    "type": "Twitter",
                    "id": "potus"
                }
            ]
        },
```
### WireFrams
https://whimsical.com/who-s-reppin-2gQ8hG3DiVcwog6y9w6yKd
![image](https://user-images.githubusercontent.com/69879139/118327555-ba33fb00-b4d3-11eb-8a74-dd402ab08045.png)

### MVP
1. Get info on representatives bassed on user's Adrress.
2. Style boxes with reps photo, title, and website url.
3. Woking Links to outside websites. 
4. Add button to clear search results. 

### Post-MVP 
1. Add an additional link to the reps info that sends the useer to "Change.org" where they can petition their representative. 
2. Add the ability for the user to store their selected reps in local storage. 
3. Add second API to collect the reps voting history/ their FEC reort. 

### Goals 
Date | Goal | 
--- | --- | 
May 14 - 16  | Find API, create project pitch |
May 17  | Project aprroval, lay down basic HTML, collect Data | 
May 18  | Solidify data paths and connect data to Elements | 
May 19  | CSS Styling | 
May 20  | More CSS Stlying, add features from Post-MVP | 
May 21  | Present! | 

### Priority Matrix

https://reppin.airfocus.com/share/7b4abab49f06f0207877edc0adb254ac

### Time Line 
Task | Estimated Time | Current TIme | Actual Time
--- | --- | --- | ---
Lay Down basic HTML | 1 hr |  |
Fetch API Data | 3 hr |  |
Organize data with filters | 4 hr |  |
Append Data to responsive Elements | 3 hr |  |
Connect search input value with Axios search param. | 2 hr |  | 
Run test with mult. input values | 2 hr |  |
remove previous search results | 3hr |  |
Debug any issues | 2 hr |  |
Refactor JS functionality  | 2 hr |  |
CSS Styling of Search bar and input | 2 hr |  |
CSS Styling of Header  | 1 hr |  |
CSS Styling of 'Rep' boxes | 2 hr  |  |
CSS responsive design (mobile) | 2 hr | |
CSS responsive design  (desktop) | 3 hr |  |
Total | 32 hr |  |



