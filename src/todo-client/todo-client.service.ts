import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class TodoClientService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: process.env.MICRO_HOST,
        port: +process.env.MICRO_PORT,
      },
    });
  }

  async createTask(body) {
    try {
      return this.client.send('create', body);
    } catch (err) {
      throw err;
    }
  }

  async taskList() {
    try {
      return this.client.send('task-list', {});
    } catch (err) {
      throw err;
    }
  }

  async taskDetail(id) {
    try {
      return this.client.send('task-detail', { id });
    } catch (err) {
      throw err;
    }
  }

  async taskUpdate(id, body) {
    try {
      let fv = { id, ...body };
      return this.client.send('update-task', fv);
    } catch (err) {
      throw err;
    }
  }

  async updateTaskStatus(id, status) {
    try {
      let fv = { id, status };
      return this.client.send('update-task-status', fv);
    } catch (err) {
      throw err;
    }
  }

  async taskDelete(id) {
    try {
      return this.client.send('delete-task', { id });
    } catch (err) {
      throw err;
    }
  }
}
