import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {
  @Input() jogo!: any;
  @Output() fechar = new EventEmitter<void>();

  quantidade = 1;

  fecharModal() {
    this.fechar.emit();
  }

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  comprar() {
    alert(`Compra realizada com sucesso: ${this.quantidade}x ${this.jogo.nome}!`);
    this.fecharModal();
  }
}
