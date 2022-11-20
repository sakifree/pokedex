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
app.get("/", (req, res) => {
    res.send("This server is doing what it needs to do!")
})

/********************************* */
// SERVER LISTENER
/********************************* */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Nothing feels better than feeling the love on port: ${PORT}`)
})