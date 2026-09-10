# Express.js Basics Assignment

Name: Sushant

## About the Project

This project is made using Node.js and Express.js.
I have created different routes and tested them using the browser.

## Routes

### Task 1: Basic Routes

#### Home

**GET /**

Output:

    Welcome to Home Page

#### About

**GET /about**

Output:

    This is About Page

#### Contact

**GET /contact**

Output:

    This is Contact Page

### Task 2: Route Parameter

**GET /user/:name**

Example:

    GET /user/john

Output:

    Hello john

### Task 3: Multiple Route Parameters

**GET /product/:id/:category**

Example:

    GET /product/101/electronics

Output:

    Product ID: 101, Category: electronics

### Task 4: Query Parameters

**GET /search**

Example:

    GET /search?name=john&role=developer

Output:

    Name: john, Role: developer

### Task 5: Request-Response

The request method and URL are displayed in the terminal.

Example:

    GET /
    GET /about
    GET /user/john

## Steps to Run

1. Open the project in VS Code.
2. Open the terminal.
3. Run `npm install`.
4. Run `node server.js`.
5. Open `http://localhost:3000` in the browser.