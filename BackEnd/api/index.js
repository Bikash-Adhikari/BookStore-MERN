import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from '../routes/book.route.js';
import cors from 'cors';

import userRoute from '../routes/user.route.js'
import ServerlessHttp from 'serverless-http';


dotenv.config()

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL
}))
app.use(express.json())



const URI = process.env.MongoDB_URI


//Connect to MongoDB
try {
    mongoose.connect(URI)
    console.log("MongoDB connected")

} catch (error) {
    console.error("MongoDB connection error", error)
}


//Define routes
app.use("/book", bookRoute)
app.use('/user', userRoute)



app.get('/', (req, res) => {
    res.send('Hello World!');
});


module.exports = app
module.exports.handler = ServerlessHttp(app)

