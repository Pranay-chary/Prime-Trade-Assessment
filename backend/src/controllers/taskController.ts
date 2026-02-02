import { Response } from 'express';
import { IRequest } from '../middleware/authMiddleware';
import Task from '../models/Task';

export const getTasks = async (req: IRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

export const getTaskById = async (req: IRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const task = await Task.findById(req.params.id);

  if (task && task.user.toString() === req.user._id.toString()) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const createTask = async (req: IRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const { title, description } = req.body;

  const task = new Task({
    title,
    description,
    user: req.user._id,
  });

  const createdTask = await task.save();
  res.status(201).json(createdTask);
};

export const updateTask = async (req: IRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const { title, description, completed } = req.body;
  const task = await Task.findById(req.params.id);

  if (task && task.user.toString() === req.user._id.toString()) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed === undefined ? task.completed : completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const deleteTask = async (req: IRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const task = await Task.findById(req.params.id);

  if (task && task.user.toString() === req.user._id.toString()) {
    await task.deleteOne();
    res.json({ message: 'Task removed' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};
