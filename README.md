# 🏕 Campsite 

This simple camping website shows how React components and Redux can be used to build a friendly user experience with instant visual updates and scaleable code.


** Note: Check [Campsite Android-App](https://github.com/Miraragal/Campsite-Android-App) out! **



## Technologies

  ![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
  ![React JS](https://img.shields.io/badge/-React-black?style=flat-square&logo=react) 
  ![Redux](https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux) 
  ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
  ![Nodejs](https://img.shields.io/badge/-NodeJS-black?style=flat-square&logo=Node.js)



## Project structure

```  
    /web                    - react js web specific code
        /components         - react components
        /App.js             - App Root component
        /routes.js          - route config
    
    /components             - React native specific code
        /components         - react native components
        /screens            - connected to store components
        /images             - images
    
    /redux
        /actions            - all redux actions
        /constants          - colors and Assets
        /reducers           - all reducers
        /store              - store config
    
    /shared                 - data 
    
```


## Requirements 

- React 
- Node.js
- Yarn

```javascript

/* First, Install the needed packages */

- brew install yarn
- yarn install --save redux react-redux

/* Then start both Node and React Native */

- run yarn start

```







