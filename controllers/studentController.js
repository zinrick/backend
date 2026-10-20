 import * as studentService from '../services/studentService.js';

 export const fetchAllStudents = async (req, res) => {
     const students = await bookService.fetchAllStudents();
     res.status(200).json(students);
 } 