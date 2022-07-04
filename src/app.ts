import express, { Express } from 'express';
import taskRouter from './routes/task.route';

const app: Express = express();

app.use(express.json());

app.use('/tasks', taskRouter);

export default app;
