import { Task } from '@prisma/client';
import { BadRequestError } from 'restify-errors';
import TaskModel from '../models/task.model';

export default class TaskService {
  private model: TaskModel;

  constructor() {
    this.model = new TaskModel();
  }

  private static taskValidator = (task: Task) => {
    if (!task) {
      throw new BadRequestError("Request can't be empty");
    }

    if (!task.title) {
      throw new BadRequestError('Title is required');
    }

    if (task.title.length < 5) {
      throw new BadRequestError('Title must be at least 5 characters long');
    }

    if (!task.description) {
      throw new BadRequestError('Description is required');
    }

    if (task.description.length < 10) {
      throw new BadRequestError(
        'Description must be at least 10 characters long',
      );
    }

    if (!task.statusId) {
      throw new BadRequestError('Status is required');
    }
  };

  public delete = async (id: number) => {
    const task = await this.model.delete(id);
    return task;
  };

  public update = async (id: number, task: Task) => {
    TaskService.taskValidator(task);
    const updatedTask = await this.model.update(id, task);
    return updatedTask;
  };

  public create = async (task: Task) => {
    TaskService.taskValidator(task);
    const createdTask = await this.model.create(task);
    return createdTask;
  };

  public getAll = async () => this.model.getAll();
}
