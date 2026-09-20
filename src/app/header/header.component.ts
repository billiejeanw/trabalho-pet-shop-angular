import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titulo = 'Portal de Jogos Retro';
  nomeUsuario = 'Visitante';
  usuarioLogado = false;

  alterarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
    this.nomeUsuario = this.usuarioLogado ? 'Jogador 1' : 'Visitante';
  }
}
