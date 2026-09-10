const express = require("express");
const app = express();

const PORT = 3000;

// Task 1: Basic Routes
app.get("/", (req, res) => {
    console.log(req.method, req.url);
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    console.log(req.method, req.url);
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    console.log(req.method, req.url);
    res.send("This is Contact Page");
});

// Task 2: Dynamic Route
app.get("/user/:name", (req, res) => {
    console.log(req.method, req.url);
    res.send(`Hello ${req.params.name}`);
});

// Task 3: Multiple Parameters
app.get("/product/:id/:category", (req, res) => {
    console.log(req.method, req.url);

    const { id, category } = req.params;

    res.send(`Product ID: ${id}, Category: ${category}`);
});

// Task 4: Query Parameters
app.get("/search", (req, res) => {
    console.log(req.method, req.url);

    const { name, role } = req.query;

    res.send(`Name: ${name}, Role: ${role}`);
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});