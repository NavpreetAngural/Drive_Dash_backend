// mongo connection (First step)
const mongoose = require("mongoose")
const express = require("express")
const backend = express()
const cors = require("cors")
const routes = require("./routes")
require('dotenv').config()
const path = require("path");

const port = process.env.PORT
const MongoUrl = process.env.MongoDbUrl

backend.use(express.json());

// CORS (Second step) works as the bouncer to the server which host will come or not and type of requests
backend.use(cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
}));

backend.use(routes)
backend.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(MongoUrl)
    .then(() => {
        backend.listen(port, () => {
            console.log("server started at port", port)
        })
    }
    )
    .catch((err) => {
        console.log(err)
    }
    )