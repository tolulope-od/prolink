# Prolink
Prolink is a professional website for professionals of all kinds, to network, share ideas, seek help and also deliver solutions to other professionals in a more stramlined way.

## Table of Contents

1. <a href="#hosted-app">Link to Hosted App</a>
2. <a href="#tech-stack-used">Tech Stack Used</a>
3. <a href="#application-features">Application Features</a>
4. <a href="#how-to-use">How To Use</a>
5. <a href="#api-endpoints">API endpoints</a>
6. <a href="#author">Author</a>

## Link to Hosted App

https://proslink.herokuapp.com

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Html]()
- [Bootstrap](https://getbootstrap.com/)
- [React](https://reactjs.org/)

## Application Features

* Display Professionals Profiles
* Register a user
* Create a user profile
* Add education and professional qualifications
* Add professional experiences
* Create and delete posts
* View Posts Feed
* Comment and Like Posts


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/tolulope-od/prolink.git
# Install dependencies
$ npm install

# Run the app
$ npm run dev
```
## API endpoints
```
POST Request -> localhost:3000/api/users/register
POST Request -> localhost:3000/api/users/login
POST Request -> localhost:3000/api/profile
GET Request -> localhost:3000/api/profile/all
GET Request -> localhost:3000/api/profile/handle
GET Request -> localhost:3000/api/posts
```

## Author

Odueke Tolulope
