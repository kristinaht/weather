# _Weather API_

#### _An application to practice using setInterval(). , Feb 2020_

#### By _**Benjamin Thom and Hristo Dzhambov**_

## Description

you need to feed the bear regularly or the bear will try to eat you. Specifically, the bear needs to be fed every ten seconds or you'll get eaten. (It really is very hungry!)

## Project Specifications

| Behavior | Input | Output |
|---|:---:|:---:|
|Level 1:|||
|User must feed the bear must be fed every 10 seconds, is not user will be eaten|User feeds bear every 10 seconds|User is not eaten| 
| |User does not feed bear every within 10 seconds|User is eaten|
|Bear should have a name and a food level of 10 when it is created|NA|NA|
|Bear should have a food level of 7 after 3001 milliseconds|NA|NA|
|Level 2:|||
|User must feed the bear must be fed every 7 seconds, is not user will be eaten|User feeds bear every 7 seconds|User is not eaten| |
| |User does not feed bear every within 7 seconds|User is eaten|User is eaten|
|Bear should have a name and a food level of 7 when it is created|NA|NA|
|Bear should have a food level of 4 after 3001 milliseconds|NA|NA|

## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/benjamin-thompdx/Epicodus_hungry-bear.git```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} Epicodus_hungry-bear```
* On Windows: ```Epicodus_hungry-bear``

_Download Manually:_

* Navigate to https://github.com/benjamin-thompdx/Epicodus_hungry-bear.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "Epicodus_hungry-bear".
* Right click "index.html" and select your preferred browser or text editor.

_Note For Editors:_ 
* Once cloned/downloaded, to run and make changes, in the terminal simply run **$ npm install** to download necessary dependencies. Then run **$ npm run build** to create your own dist folder with a bundle.js file.
* This application contains **dotenv-webpack**, utilize the .env file in the root directory to store your API keys which are referenced within the const url of **weather-interface.js**. 
## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/benjamin-thompdx/Epicodus_hungry-bear/issues) here on GitHub._

## Technologies Used

* Javascript
* jQuery
* Webpack
* Node.js
* Jest

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Benjamin Thom and Hristo Dzhambov_**