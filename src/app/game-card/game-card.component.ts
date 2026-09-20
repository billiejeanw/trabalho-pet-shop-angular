import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() jogo!: any;
  @Output() selecionado = new EventEmitter<any>();

  verDetalhes() {
    this.selecionado.emit(this.jogo);
  }

  alternarFavorito() {
    this.jogo.favorito = !this.jogo.favorito;
  }
}
