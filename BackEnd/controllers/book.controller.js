import { Book } from '../models/book.model.js';

//get data from the database to display in FrontEnd ======>> Communicating with Database
export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);

    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json(error);
    }
}

