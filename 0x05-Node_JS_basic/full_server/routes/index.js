import express from 'express';
const router = express.Router(); // Links routes with controllers
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';


// Link '/' route with getHomePage Controller

router.get('/', AppController.getHomePage); 

// Link '/students' route with getAllStudents Controller

router.get('/students', StudentsController.getAllStudents);

// Link '/students/:major' route with getAllStudentsByMajor controller

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
