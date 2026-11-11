 import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
    const books = await bookModel.fetch();
    return books;
}

export const createBook = async (book) => {
    const bookId = await bookModel.create(book);
    return bookId;
}

export const updateBook = async (book) => {
    return await bookModel.update(book);
};

export const deleteBook = async (id) => {
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}