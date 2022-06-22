import express, { Express, Request, Response } from 'express';
import taskRouter from './routes/task.route';

const app: Express = express();

app.use('/tasks', taskRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export default app;
