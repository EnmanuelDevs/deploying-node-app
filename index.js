const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Node.js Deploying in Render. My Name is Enmanuel Castillo",
        enviroment: process.env.NODE_ENV || "development"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});