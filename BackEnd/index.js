import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './routes/book.route.js';
import cors from 'cors';

import userRoute from './routes/user.route.js'


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 4000
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


app.listen(PORT, () => {
    console.log(`BookStore server is listening on port ${PORT}`)
})

