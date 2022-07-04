import { PrismaClient, Task as TaskI } from '@prisma/client';
import client from './client';

export default class TaskModel {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = client as PrismaClient;
  }

  public update = async (id: number, task: TaskI) => {
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: task,
    });
    return updatedTask;
  };

  public create = (Task: TaskI) => this.prisma.task.create({ data: Task });

  public getAll = () => this.prisma.task.findMany({ include: { status: true } });
}
