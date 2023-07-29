export class CreateNoticeDto {
  id: number;

  title: string;
  content: string;

  pdf: Buffer;
  date: string;
}
