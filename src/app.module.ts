import { TestController } from './test.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';



@Module({
  imports: [],
  controllers: [
    TestController, AppController],
  providers: [AppService],
})
export class AppModule { }
