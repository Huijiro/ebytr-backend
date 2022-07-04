import express from 'express';
import TaskController from '../controllers/task.controller';
import ErrorHandler from '../middleware/errorHandling';
import 'express-async-errors';

const taskRouter = express.Router();
const taskController = new TaskController();

taskRouter.get('/', taskController.getAll);
taskRouter.post('/', taskController.create);
taskRouter.use(ErrorHandler.handle);

export default taskRouter;
