import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './routes/book.route.js';
import cors from 'cors';

import userRoute from './routes/user.route.js'


dotenv.config()

const app = express()

const allowedOrigins = [
    'http://localhost:5173',
    `${process.env.FRONTEND_URL}`
];


app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));



// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }))


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



app.get('/', (req, res) => {
    res.send('Hello World!');
});




app.listen(PORT, () => {
    console.log(`BookStore server is listening on port ${PORT}`)
})

