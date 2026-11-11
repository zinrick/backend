
import pool from '../config/db.js';

// FETCH STUDENTS
export const fetch = async () => {
    const [rows] = await pool.query(
        'SELECT * FROM student'
    );
    return rows;
};

// INSERT STUDENT
export const create = async (student) => {
    const [result] = await pool.query(
        `INSERT INTO student
        (name, age, program, sr_code)
        VALUES (?, ?, ?, ?)`,
        [
            student.name,
            student.age,
            student.program,
            student.sr_code
        ]
    );

    return result.insertId;
};

// UPDATE STUDENT
export const update = async (student) => {
    const [result] = await pool.query(
        `UPDATE student
        SET name = ?, age = ?, program = ?, sr_code = ?
        WHERE id = ?`,
        [
            student.name,
            student.age,
            student.program,
            student.sr_code,
            student.id
        ]
    );

    return result.affectedRows;
};

// DELETE STUDENT
export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM student WHERE id = ?",
        [id]
    );

    return result.affectedRows;
};
