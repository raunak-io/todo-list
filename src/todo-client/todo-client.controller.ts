import { SharedService } from './../shared/shared.service';
import { TodoClientService } from './todo-client.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('todo-client')
@UsePipes(new ValidationPipe({ transform: true }))
export class TodoClientController {
  constructor(
    private readonly todoService: TodoClientService,
    private readonly sservice: SharedService,
  ) {}

  @Post()
  async createTask(@Body() body, @Res() res: Response) {
    try {
      let data = await this.todoService.createTask(body);
      data.subscribe(
        result => {
          return res.json(result);
        },
        err => {
          const { code, response } = this.sservice.processError(
            err,
            this.constructor.name,
          );
          return res.status(code).json(response);
        },
      );
    } catch (err) {
      const { code, response } = await this.sservice.processError(
        err,
        this.constructor.name,
      );
      return res.status(code).json(response);
    }
  }
  @Get('get-list')
  async getTaskList(@Res() res: Response) {
    try {
      let data = await this.todoService.taskList();

      data.subscribe(
        result => {
          return res.json(result);
        },
        err => {
          const { code, response } = this.sservice.processError(
            err,
            this.constructor.name,
          );
          return res.status(code).json(response);
        },
      );
    } catch (err) {
      const { code, response } = await this.sservice.processError(
        err,
        this.constructor.name,
      );
      return res.status(code).json(response);
    }
  }

  @Get('get-task-detail/:id')
  async getTaskDetail(@Param('id') id: string, @Res() res: Response) {
    try {
      let data = await this.todoService.taskDetail(id);
      data.subscribe(
        result => {
          return res.json(result);
        },
        err => {
          const { code, response } = this.sservice.processError(
            err,
            this.constructor.name,
          );
          return res.status(code).json(response);
        },
      );
    } catch (err) {
      const { code, response } = await this.sservice.processError(
        err,
        this.constructor.name,
      );
      return res.status(code).json(response);
    }
  }

  @Patch('update-task/:id')
  async updateTask(
    @Param('id') id: string,
    @Body() body: any,
    @Res() res: Response,
  ) {
    try {
      let data = await this.todoService.taskUpdate(id, body);
      data.subscribe(
        result => {
          return res.json(result);
        },
        err => {
          const { code, response } = this.sservice.processError(
            err,
            this.constructor.name,
          );
          return res.status(code).json(response);
        },
      );
    } catch (err) {
      const { code, response } = await this.sservice.processError(
        err,
        this.constructor.name,
      );
      return res.status(code).json(response);
    }
  }

  @Patch('update-task-status/:id')
  async updateTaskStatus(
    @Param('id') id: string,
    @Body() body: any,
    @Res() res: Response,
  ) {
    try {
      let data = await this.todoService.updateTaskStatus(id, body.status);
      data.subscribe(
        result => {
          return res.json(result);
        },
        err => {
          const { code, response } = this.sservice.processError(
            err,
            this.constructor.name,
          );
          return res.status(code).json(response);
        },
      );
    } catch (err) {
      const { code, response } = await this.sservice.processError(
        err,
        this.constructor.name,
      );
      return res.status(code).json(response);
    }
  }

  @Delete('delete-task/:id')
  async deleteTask(@Param('id') id: string, @Res() res: Response) {
    try {
      let data = await this.todoService.taskDelete(id);
      data.subscribe(
        result => {
          return res.json(result);
        },
        err => {
          const { code, response } = this.sservice.processError(
            err,
            this.constructor.name,
          );
          return res.status(code).json(response);
        },
      );
    } catch (err) {
      const { code, response } = await this.sservice.processError(
        err,
        this.constructor.name,
      );
      return res.status(code).json(response);
    }
  }
}
