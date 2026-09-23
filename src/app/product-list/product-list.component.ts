import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

export interface Produto {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  tipoAnimal: string;
  promocao: boolean;
  disponivel: boolean;
  descricao: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Ração Premium 15kg',
      imagem: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=400',
      preco: 189.90,
      tipoAnimal: 'Cachorro',
      promocao: true,
      disponivel: true,
      descricao: 'Ração padrão para cães adultos.'
    },
    {
      id: 2,
      nome: 'Arranhador Torre',
      imagem: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=400',
      preco: 250.00,
      tipoAnimal: 'Gato',
      promocao: false,
      disponivel: true,
      descricao: 'Arranhador de 3 andares, bom para quem tem gatos que precisam gastar energia.'
    },
    {
      id: 3,
      nome: 'Banho e Tosa Completo',
      imagem: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400',
      preco: 80.00,
      tipoAnimal: 'Cachorro/Gato',
      promocao: true,
      disponivel: false,
      descricao: 'Banho, corte de unhas e tosa. No momento estamos sem horários na agenda.'
    }
  ];

  produtoSelecionado: Produto | null = null;

  selecionarProduto(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  fecharDetalhes() {
    this.produtoSelecionado = null;
  }
}
