import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from '../routes/book.route.js';
import cors from 'cors';

import userRoute from '../routes/user.route.js'
import ServerlessHttp from 'serverless-http';


dotenv.config()

const app = express()

const allowedOrigin = process.env.FRONTEND_URL || 'https://book-store-mern-frontend-beta.vercel.app';


console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
app.use(cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json())


// Handle preflight requests
app.options('*', cors());



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


export const handler = ServerlessHttp(app);

