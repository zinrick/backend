import pool from '../config/db.js';


//retrieve
export const fetch = async() => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};


export const findBookByNameAndAuthor = async (name, author) =>{
    const [rows] = await pool.query("SELECT * FROM book WHERE name = ? AND author = ?",
    [name, author]
);
    return rows;
}

export const findBookById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM book WHERE id = ?",
    [id]
);
    return rows;
}

//create
export const create = async (book) =>{
    const [result] = await pool.query(
        "INSERT INTO book(name, author) VALUES (?, ?)",
        [book.name, book.author]
    );

    return result.insertId;
}

//updateuwu
export const update = async (book) => {
  const [result] = await pool.query (
    "UPDATE book SET name= ?, author= ? WHERE id= ? ",
    [book.name, book.author, book.id]
  );
  return result.affectedRows;
}

//deleteuwu
export const remove = async (id) => {
  const [result] = await pool.query (
    "DELETE FROM book WHERE id= ?", [id]
  );
  return result.affectedRows
}