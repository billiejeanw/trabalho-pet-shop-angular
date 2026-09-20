import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() produto!: any;
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
    alert(`Compra de ${this.quantidade}x ${this.produto.nome} adicionada ao carrinho!`);
    this.fecharModal();
  }
}
