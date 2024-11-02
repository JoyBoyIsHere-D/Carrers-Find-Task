import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

// Endpoint to get all jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log("Jobs fetched:", jobs)
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
