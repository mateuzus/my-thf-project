import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleToolbar = 'Alpino - Tela Real 8001';

 menus = [
   { label: 'Consultar NF', link: './consulta-nf'}
 ]
}
