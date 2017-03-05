#Barebone E-Commerce application built in React/Redux

##How To get started:

Open a terminal window and change directory to the project folder:

 - run the following commands to first install the npm modules then start the server:
npm install
npm run bundle
npm run serve (This will start the server)

 - in the internet browser go to this address: http://localhost:3000

 - to run the tests open another terminal tab or window and run this command:
npm test


##Built

The app is built with **React** and **Redux**.
I was undecided whether to use Redux, since although it increases the scalability also the complexity of the app.
For bundling I included **webpack** with the Babel loader to transpile the code from ES2015 to ES5, the "bundle" file is created in the public folder so it's served statically to the client by the server.
For testing libraries I used **Mocha** and **Enzyme**. **Chai** for the asserting library.

##The folder structure:

APP
 |
 +-- client
 |  |  
 |  +-- src
 |     |   
 |     +-- actions
 |     +-- components
 |     +-- containers
 |     +-- reducers 
 |     +-- app.jsx (webpack **entry**)
 ...
 |
 +-- public
    |
    +-- css
    +-- data
    +-- js
       |
       +-- app.js("bundle" file) 

- the **actions** folder index.js file that exports the action creators functions that are dispatched by the components to update the store.
- the **components** folder contains the presentational components, they don't have any logic.
- the **containers** folder contains the components that deal with part of the logic and map the props to the children presentational components using Redux.
- the **reducers** folder contains the reducers are functions that receive the dispatched actions and update the state/store
- **app.jsx** is the webpack bundling entry file and renders the application root component, in this case the <Provider /> Redux component.
- the "bundle" file is in the public/js folder and it's served as static file upon the client request sent by the Home component.

