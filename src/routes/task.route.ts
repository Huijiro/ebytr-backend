import express from 'express';
import TaskController from '../controllers/task.controller';

const taskRouter = express.Router();
const taskController = new TaskController();

taskRouter.get('/', taskController.getAll);

export default taskRouter;
