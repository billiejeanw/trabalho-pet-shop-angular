import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titulo = 'Pet Shop Virtual';
  nomeUsuario = 'Visitante';
  usuarioLogado = false;

  alterarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
    this.nomeUsuario = this.usuarioLogado ? 'Amante de Pets' : 'Visitante';
  }
}
