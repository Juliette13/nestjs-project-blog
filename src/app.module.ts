import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticleModule } from "./article/article.module";
import { AuthModule } from "./authentication/auth.module";
import { CommentaireModule } from "./commentaire/commentaire.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [UserModule, ArticleModule, CommentaireModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
