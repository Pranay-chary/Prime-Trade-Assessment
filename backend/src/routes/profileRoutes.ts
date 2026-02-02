import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/me').get(protect, getProfile).put(protect, updateProfile);

export default router;
