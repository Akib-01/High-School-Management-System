import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NoticeService } from './notice.service';
@Controller('notices')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post('/insert')
  @UseInterceptors(FileInterceptor('pdf'))
  async createNotice(
    @Body() createNoticeDto: CreateNoticeDto,
    @UploadedFile() pdf: Express.Multer.File,
  ): Promise<any> {
    const notice = await this.noticeService.createNotice(
      createNoticeDto.title,
      createNoticeDto.content,
      pdf.buffer,
      createNoticeDto.date,
    );
    return { id: notice.id };
  }

  @Get('/get')
  async getAllNotices(): Promise<any> {
    const notices = await this.noticeService.getAllNotices();
    return { notices };
  }

  @Get('/get/:id')
  async getNoticeById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<void> {
    const notice = await this.noticeService.getNoticeById(id);
    res.set('Content-Type', 'application/pdf');
    res.send(notice.pdf);
  }
}
