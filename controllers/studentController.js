
import * as studentService from '../services/studentService.js';

// GET ALL STUDENTS
export const fetchAllStudents = async (req, res) => {
    try {
        const students = await studentService.fetchAllStudents();

        res.status(200).json(students);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message
        });
    }
};

// POST - CREATE STUDENT
export const createStudent = async (req, res) => {
    console.log(req.body);

    const { name, age, program, sr_code } = req.body;

    const student = {
        name,
        age,
        program,
        sr_code
    };

    try {
        const studentID = await studentService.createStudent(student);

        res.status(201).json({
            success: true,
            message: studentID
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message
        });
    }
};

// PUT - EDIT STUDENT
export const editStudent = async (req, res) => {
    const { name, age, program, sr_code } = req.body;
    const { id } = req.params;

    const student = {
        name,
        age,
        program,
        sr_code,
        id
    };

    try {
        const updatedStudent = await studentService.updateStudent(student);

        if (updatedStudent === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student updated successfully"
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message
        });
    }
};

// DELETE STUDENT
export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedStudent = await studentService.deleteStudent(parseInt(id));

        if (deletedStudent === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message
        });
    }
};
