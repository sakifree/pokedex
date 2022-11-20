/********************************* */
// DECLARE DEPENDENCIES
/********************************* */
require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const methodOverride = require("method-override")
const pokemon = require("./models/pokemon")

/********************************* */
// MIDDLEWARE
/********************************* */
app.use(morgan("dev"))
app.use(express.urlencoded({ extended:true }))
app.use(express.static("public"))

/********************************* */
// ROUTES
/********************************* */
// HOME ROUTE
app.get("/", (req, res) => {
    res.send("This server is doing what it needs to do!")
})

// INDEX ROUTE
app.get("/pokemon", (req, res) => {
    res.render("pokemon/index.ejs", { pokemon }) 
})

// NEW ROUTE
app.get("/pokemon/new", (req, res) => {

})

// DELETE ROUTE
app.delete("/pokemon/:id", (req, res) => {

})

// UPDATE ROUTE
app.put("/pokemon/:id", (req, res) => {

})

// CREATE ROUTE
app.post("/pokemon", (req, res) => {

})

// EDIT ROUTE
app.get("/pokemon/:id/edit", (req, res) => {

})

// SHOW ROUTE
app.get("/pokemon/:id", (req, res) => {
    res.render("pokemon/show.ejs", { 
        poke: pokemon[req.params.id],
        index: req.params.id
    })
})

/********************************* */
// SERVER LISTENER
/********************************* */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Nothing feels better than feeling the love on port: ${PORT}`)
})