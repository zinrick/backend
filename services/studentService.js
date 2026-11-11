 import e from 'express';
import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async () => {
    const students = await studentModel.fetch();
    return students;
}
export const createStudent = async (student) => {
      const studentID = await studentModel.create(student);
      return studentID;
}

export const updateStudent = async (student) => {
    return await studentModel.update(student);
};

export const deleteStudent = async (id) => {
    return await studentModel.remove(id);
};