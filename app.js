const express = require("express");

// routes from /routes
const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const resellerRoutes = require("./routes/resellerRoutes");

// middleware function
const filterNonXHR = require("./middleware/filterNonXHR")
const filterNonHttps =  require("./middleware/filterNonHttps")
const filterNonTeapot =  require("./middleware/filterNonTeapot")

const app = express();

// Add to the req.body
app.use(express.json())

// app.use("/", filterNonHttps)
app.use(filterNonXHR)
app.use(filterNonTeapot)
app.use("/", mainRoutes);
app.use("/product", productRoutes);
app.use("/reseller", resellerRoutes)

module.exports = app;

