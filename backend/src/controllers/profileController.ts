import { Response } from 'express';
import { IRequest } from '../middleware/authMiddleware';
import User from '../models/User';

export const getProfile = async (req: IRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const updateProfile = async (req: IRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
