import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TaskService from '../services/task.service';

export default class TaskController {
  private service: TaskService;

  constructor() {
    this.service = new TaskService();
  }

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await this.service.delete(+id);
    res.status(StatusCodes.OK).json(task);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const Task = req.body;
    const updatedTask = await this.service.update(+id, Task);
    res.status(StatusCodes.OK).json(updatedTask);
  };

  public create = async (req: Request, res: Response) => {
    const Task = req.body;

    const createdTask = await this.service.create(Task);
    res.status(StatusCodes.CREATED).json(createdTask);
  };

  public getAll = async (_req: Request, res: Response) => {
    const tasks = await this.service.getAll();
    return res.status(StatusCodes.OK).json(tasks);
  };
}
