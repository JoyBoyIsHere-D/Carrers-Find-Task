import express from 'express';
import { getJobs, getJobById } from '../controllers/jobController.js';

const router = express.Router();

router.get('/jobs', getJobs);          // GET all jobs with optional filters
router.get('/jobs/:id', getJobById);    // GET job by ID

export default router;
