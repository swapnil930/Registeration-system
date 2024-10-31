# Login & Registeration-system

This is a full-stack web application for managing users, built with **ReactJS** on the frontend and **JSON** on the backend. It allows users to Register, Login, ViweAllUsers funtionality, The app is designed to be fast, responsive, and user-friendly.

## Features

### Frontend
- Built using **ReactJS** with a modern, component-based architecture.
- Interactive UI with live updates for Sigup, Login, users.
- **Bootstrap** integration for an elegant, responsive design.
- Error handling and loading states with spinners for a smooth user experience.

### Backend
- Powered by **Node Js**, with a scalable and efficient REST API.
- **json-server** for  quick mock API by serving a JSON file as a RESTful endpoint,.
- **JSON** is used for database management.
- Well-structured CRUD operations with proper HTTP status responses.

## Technologies Used

- **ReactJS** for building the user interface.
- **Axios** for HTTP requests.
- **React Router** for page navigation.
- **JSON-server** for backend services.
- **Node Js** for middleware services.
- **JSON** for database management.

## Setup and Installation

### Backend (Json-server)
1. Clone the repository: You clone the project from GitHub to your local machine (download zip file and extract it in your system).
2. create server folder in location registeration-system/server (not in src folder)
3. Now to run Json server you need to install node_module folder inside server folder.
```bash
npm install
```
5. inside that add files/paste files from server folder (follow structure as shown in server folder)
- eg. db.json, package.json
6. Now install json-server
```bash
npm i json-server --save
```

### Frontend (ReactJS)
  1. Open vsCode terminal (Use Following Commands)
  2. In your project directory: install node_module folder using command
```bash
npm install
```
  5. Install following dependancy after taking node_module folder
  4. Install bootstrap : npm install bootstrap
  5. Install fontAwesome: npm i @fortawesome/fontawesome-free
  6. Connect fontawesome with html page:	Visit fontawesome (fortawesome/fontawesome-free) official website copy the cdn link and paste in index.html.
  7. Install Axios: npm i axios
  8. Install React-Router: npm install react-router-dom@6
  9. All defendancy setup done....
  10. Now inside src file create and manage same by (refer registeration-system project files and components code).
  11. Now run application : npm start
  12. Now change directory: cd server
  13. Now run server: npm start

### API Endpoints
- POST /contacts: Add a new contact.
- GET /contacts: Get all contacts.
- GET /contacts/{id}: Get a contact by ID.
- PUT /contacts/{id}: Update a contact by ID.
- DELETE /contacts/{id}: Delete a contact by ID.
- Make sure API will be same in both service component & Controller class.



### Screenshots
![Uploading image.png…]()
![Uploading image.png…]()
![Uploading image.png…]()







