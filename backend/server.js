const express = require('express');
const dotenv = require("dotenv")
const cors = require('cors')
const db = require('./config/db.js')
const userRoutes = require('./routes/userRoutes.js')


const app = express();
dotenv.config()

db.connectDB()

app.use(cors())
app.use(express.json()) //to accept json data from frontend

app.get("/", (req, res) => {
    res.send("API is Running")
})

app.use("/api/user", userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));