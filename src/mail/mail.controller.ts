import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get } from '@nestjs/common';

@Controller({ path: '/mail' })
export class MailController {
  constructor(private readonly mailerService: MailerService) {}

  @Get()
  async classify() {
    const res = await this.mailerService
      .sendMail({
        to: 'mono2048@163.com',
        from: '3151435932@qq.com',
        subject: '测试',
        template: './validate.ejs',
        context: {
          code: 3322,
        },
      })
      .then((result) => {
        console.log('---->' + result);
      })
      .catch((error) => {
        console.log('error:', error);
      });

    return { code: 0, res };
  }
}
