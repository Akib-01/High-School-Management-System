import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createReadStream, unlink } from 'fs-extra';
import { join } from 'path';
import { Repository } from 'typeorm';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { Notice } from './entities/notice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepository: Repository<Notice>,
  ) {}

  async findAll(): Promise<Notice[]> {
    return this.noticeRepository.find();
  }

  async findById(id: number): Promise<CreateNoticeDto> {
    return this.noticeRepository.findOne({ where: { id: id } });
  }

  async create(file: Express.Multer.File): Promise<CreateNoticeDto> {
    const { originalname, filename } = file;
    const path = join(process.cwd(), 'uploads', filename);

    const notice = new Notice();
    notice.originalname = originalname;
    notice.filename = filename;
    notice.path = path;

    await this.noticeRepository.save(notice);

    return notice;
  }

  async delete(id: number): Promise<void> {
    const notice = await this.noticeRepository.findOne({ where: { id: id } });

    if (!notice) {
      throw new Error('Notice not found');
    }

    await unlink(notice.path);
    await this.noticeRepository.delete(id);
  }

  async getNoticeFileStream(id: number) {
    const notice = this.findById(id);

    if (!notice) {
      throw new Error('Notice not found');
    }

    return createReadStream((await notice).path);
  }
}
