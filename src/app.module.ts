import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticleModule } from "./article/article.module";
import { CommentaireModule } from "./commentaire/commentaire.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [UserModule, ArticleModule, CommentaireModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
