import express from 'express';
import createNewCourse from '../controller/createCourse.js'; // Ensure correct path and file extension

const router = express.Router();

router.post('/newCourse', createNewCourse);

export default router;
