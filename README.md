![cf](https://i.imgur.com/7v5ASc8.png) Lab 13: MongoDB
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `start` script for running your server
  * create a `test` script for running your tests
* **server.js** - runs your application
* **model/** - contains mongoose schemas
* **route/** - contains your routes
* **\_\_test\_\_/** - contains route tests

## Feature Tasks

##### Minimum Requirements
* create an HTTP Server using `express`
* create a resource **model** of your choice that uses `mongoose.Schema` and `mongoose.model`
* use the `body-parser` express middleware to parse the `req` body on `POST` and `PUT` requests
* use the npm `debug` module to log the functions and methods that are being used in your application
* use the express `Router` to create a route for doing **RESTFUL CRUD** operations against your _model_

## Server Endpoints
##### `/api/resource-name`
* **POST** request
  * should pass data as stringifed JSON in the body of a post request to create a new resource

##### `/api/resource-name/:id`
* **GET** request
  * should pass the id of a resource through the url endpoint to get a resource (using `req.params`)
* **PUT** request
  * should pass data as stringifed JSON in the body of a put request to update a pre-existing resource
* **DELETE** request
  * should pass the id of a resource though the url endpoint to delete a resource (using `req.params`)

## Testing
Create a series of tests to ensure that your `/api/resource-name` endpoints respond as described for each condition below.  You'll also want to create a test that will ensure that your API returns a status code of **404** for routes that have not been registered.
  * **GET** test **200**
    * should return a resource with a valid body
  * **GET** test **404**
    * should respond with 'not found' for valid requests made with an id that was not found
  * **PUT** test **200**
    * should return a resource with an updated body
  * **PUT** test **400**
    * should respond with 'bad request' if no request body was provided
  * **PUT** test **404**
    * should respond with 'not found' for valid requests made with an id that was not found
  * **POST** test **400**
    * should respond with 'bad request' if no request body was provided
  * **POST** test **200**
    * should return a resource for requests made with a valid body

## Stretch Goal
* **GET** request to `/api/resource-name` should return an array of stored resources