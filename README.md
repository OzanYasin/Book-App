# Book App

MERN Stack project, where users login/register and track their personal readings by adding, editing, and removing a single book (a crud app with user authentication). React Hooks, Async/Await, React Router 6, Axios is implemented. Also applied redux-toolkit (thunkAPI) for creating and managing Redux stores, as well as for writing Redux actions and reducers. JWT used for authentication and authorization. Front-End application (React) connected with Backend application (Express, MongoDB, NodeJS). Finally, we deployed our MERN app on heroku by using CLI.



**Project in Action [Book-App](https://book-app-v1.herokuapp.com).**

---

## Used Technologies:
  ### Client:
  - React.js
  - React-Router@6 
  - React-Redux-Toolkit
  - Axios
  - Styled Components
  - normalize.css 
  - React-Toastify
  - React-icons 
  - Moment.js
  ### Server:
  - node.js
  - express.js
  - nodemon
  - dotenv
  - mongoose
  - validator
  - express-async-errors
  - http-status-codes
  - bcryptjs
  - jsonwebtoken
  - concurrently
  - morgan
  - helmet
  - xss-clean
  - express-mongo-sanitize
  - express-rate-limit

---

## Installation:

```
- git clone https://github.com/OzanYasin/Books-App.git
- create .env file
- setup values for MONGO_URL, JWT_SECRET, JWT_LIFETIME in .env
- npm install && npm start
```

We created our frontend application and that is our public assets. So, we use express static (in server.js) to serve them as our public assets. 
By doing that, app can be reached on localhost:5000

### Contributers

Thanks to my team colleague **Cansu Altun** for her contributive and motivated personality. 
