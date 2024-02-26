import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';
import { MailController } from './mail/mail.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.qq.com',
        port: 465,
        ignoreTLS: false,
        secure: true,
        auth: {
          user: '3151435932@qq.com',
          pass: 'vizwawvmfzxdddbf',
        },
      },
      defaults: {
        from: '"Bot" <3151435932@qq.com>',
      },
      preview: false,
      template: {
        dir: join(process.cwd(), './src/common/template'), //这里就是你的ejs模板文件夹路径
        adapter: new EjsAdapter(),
        options: {
          strict: true, //严格模式
        },
      },
    }),
  ],
  controllers: [AppController, MailController],
  providers: [AppService],
})
export class AppModule {}
