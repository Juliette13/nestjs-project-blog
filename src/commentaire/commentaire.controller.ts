import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags
} from "@nestjs/swagger";
import { CommentaireService } from "./commentaire.service";
import { CreateCommentDTO } from "./models/CreateCommentDTO";

@ApiBearerAuth()
@ApiUseTags("Commentaire")
@Controller("Commentaire")
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  // If user connected, not implemented now
  @Post(":commentaire")
  @ApiOperation({ title: "Create Commentaire" })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created."
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async create(@Body() createCommentDTO: CreateCommentDTO) {
    this.commentaireService.create(createCommentDTO);
  }

  // If user connected, not implemented now
  @Delete(":id")
  async deleteComment(@Param("id") id: number) {
    return this.commentaireService.deleteComment(id);
  }
}
