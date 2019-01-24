import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CommentaireRepository } from "./commentaire.repository";
import { Commentaire } from "./interfaces/commentaire.interface";

@Injectable()
export class CommentaireService {
  constructor(
    @Inject(CommentaireRepository)
    private readonly commentaireRepository: CommentaireRepository
  ) {}

  async create(commentaire: Commentaire) {
    this.commentaireRepository.save(commentaire);
  }

  async deleteComment(id: number) {
    this.commentaireRepository.delete(id);
  }
}
