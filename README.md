# 2006-MACS2-JENTS

## Project Mission Statement
In Singapore, buying public housing for the first time can be a daunting task for young adults. As such, we have elected to create a convenient and intuitive website for Singaporeans to get easy access to the housing market.

## Folder Organisation and Guide
```
├── SimplyStay
|   ├── src
        ├── Components
        ├── Controllers
        ├── Images
        ├── Models
        ├── Pages
        ├── App.css
        ├── App.js
        ├── firebase.js
        ├── index.css
        ├── index.js
|   ├── .gitignore
|   ├── README.md
|   ├── package-lock.json
|   ├── package.json
```
#### `Components` folder
The `Components` folder contains the necessary components needed to make the website function.

#### `Controllers` folder
The `Controllers` folder contains important app logic for some of the components.

#### `Images` folder
The `Images` folder contains images used in the website.

#### `Models` folder
The `Models` folder contains the flats used in the website.

#### `Pages` folder
The `Pages` folder contains the UI for the website.

#### `App.js` & `App.css`
The meat of the website.

#### `firebase.js`
Contains the configuration for our Firestore database.

#### `index.js` & `index.css`
When `npm start` is called, these two files will be called.

## Tech Stack
FR(A)N \[Firebase, React (Ant Design UI), Node.js\]
<div>
<img src = "http://img.shields.io/badge/firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt = "Firebase">
<img src = "http://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black" alt = "React">
<img src = "http://img.shields.io/badge/antdesign-0170FE?style=flat-square&logo=antdesign&logoColor=black" alt = "Ant Design UI">
<img src = "http://img.shields.io/badge/nodedotjs-339933?style=flat-square&logo=nodedotjs&logoColor=black" alt = "nodejs">
</div>
<div>
<img src="http://img.shields.io/badge/Javascript-fcd400?style=flat-square&logo=javascript&logoColor=black" alt="Javascript">
<img src = "http://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=black" alt = "npm">
<img src="https://img.shields.io/badge/React Router-black?style=flat-square&logo=reactrouter&logoColor=CA4245" alt="React-Router">
</div>

## Deployed App (Non-stable)
https://simply-stay.vercel.app/

NOTE: The vercel app is non-stable, meaning that some features such as the register/login with google function, or the google maps display, does not work. For best performance, localhost is highly recommended.

## How To Setup
1. Clone the repository
2. Go to the file directory with command prompt
3. Type `npm install` to install the dependencies needed for the project
4. Type `npm start`

## Group Members:
- [Jia Ji](https://github.com/JiaJi99)
- [Enric](https://github.com/etdz)
- [Nigel](https://github.com/nigelip)
- [Jared](https://github.com/themandude2)
- [Zheng Jie](https://github.com/saffronrust)
