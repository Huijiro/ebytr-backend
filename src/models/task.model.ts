import { PrismaClient } from '@prisma/client';
import client from './client';

export default class TaskModel {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = client as PrismaClient;
  }

  public getAll = () => this.prisma.task.findMany({ include: { status: true } });
}
