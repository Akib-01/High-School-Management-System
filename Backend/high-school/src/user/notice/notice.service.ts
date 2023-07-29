import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notice } from './entities/notice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepository: Repository<Notice>,
  ) {}

  async createNotice(
    title: string,
    content: string,
    pdf: Buffer,
    date: string,
  ): Promise<Notice> {
    const notice = new Notice();
    notice.title = title;
    notice.content = content;
    notice.pdf = pdf;
    notice.date = date;

    return await this.noticeRepository.save(notice);
  }

  async getAllNotices(): Promise<Notice[]> {
    return await this.noticeRepository.find();
  }

  async getNoticeById(id: number): Promise<Notice> {
    return await this.noticeRepository.findOne({ where: { id: id } });
  }
}
