import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


@Input() ttConta: any
@Input() ttDocFiscal: any
@Input() ttItemDoc: any
@Input() ttDuplicata: any


}
