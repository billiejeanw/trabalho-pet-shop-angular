import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../game-card/game-card.component';
import { GameDetailsComponent } from '../game-details/game-details.component';

export interface Jogo {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  disponivel: boolean;
  favorito: boolean;
}

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameCardComponent, GameDetailsComponent],
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  jogos: Jogo[] = [
    {
      id: 1,
      nome: 'Aventura Espacial',
      imagem: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400',
      descricao: 'Explore o universo em uma nave incrível.',
      disponivel: true,
      favorito: false
    },
    {
      id: 2,
      nome: 'Corrida Maluca',
      imagem: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400',
      descricao: 'Corridas emocionantes com carros customizados.',
      disponivel: true,
      favorito: true
    },
    {
      id: 3,
      nome: 'Batalha Medieval',
      imagem: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400',
      descricao: 'Defenda seu castelo de dragões e inimigos.',
      disponivel: false,
      favorito: false
    }
  ];

  jogoSelecionado: Jogo | null = null;

  selecionarJogo(jogo: Jogo) {
    this.jogoSelecionado = jogo;
  }

  fecharDetalhes() {
    this.jogoSelecionado = null;
  }
}
