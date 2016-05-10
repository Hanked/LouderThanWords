## Install and run the API

Clone the repo, then:

```bash
npm install
node server.js
```

The app will be served at `localhost:3000`.

## Available Routes

#### **POST** `/api/users`
* Accepts `username`, `email`, and `password` to create a user. Returns a JWT.

#### **POST** `/api/users/authenticate`
* Accepts `username` or `email` and `password` to authenticate a user. Returns a JWT.

#### **GET** `/api/users`
* Returns all users in the database. Requires `admin` scope.

#### **PATCH** `/api/users/{id}`
* Updates a user. Requires `admin` scope.

#### **POST** `/api/phrases`
* Accepts `text`
