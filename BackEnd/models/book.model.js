import mongoose, { Schema } from 'mongoose'

const bookSchema = new Schema(
    {
        name: String,
        title: String,
        price: Number,
        category: String,
        image: String,

    }
)

export const Book = mongoose.model('Book', bookSchema)
