# [Book App](https://book-app-kodluyoruz.herokuapp.com)

That repo contains a **MERN Stack** project, where users login/register and track their personal readings by adding, editing, and removing a single book (a crud app with user authentication). In addition, on the "All Books" page there is a search form where the user can filter each parameter. We utilized hooks to take the advantage of **React**. We used react-router@6 to switch between pages on client side. We entegrated **styled-components** and **bootstrap** libraries to style our application. We implemented **redux-toolkit** (thunkAPI) as an alternative to contextAPI for creating and managing Redux stores, as well as for writing Redux actions and reducers. Our Front-End application (**React**) is connected with a Backend application **(Express, MongoDB, NodeJS)**. We used **JWT** for authentication and authorization. Finally, we deployed our MERN app on **heroku** by using CLI, and published API Documents on **SwaggerUI**.

### Project in Action: [Book-App](https://book-app-kodluyoruz.herokuapp.com)

### API Documentation [Book-App API](https://app.swaggerhub.com/apis-docs/OzanYasin/book-app-kodluyoruz-API/1.0)

---

## Used Technologies:
  ### Client:
  - React.js
  - React-Router@6 
  - React-Redux-Toolkit
  - Axios
  - React-Bootstrap
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
Moreover, special thanks to dear **Arda Arslan** for his contributions due to designing our application.
