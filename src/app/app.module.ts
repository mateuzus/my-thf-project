import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabelaComponent } from './tabela';
import { FiltroComponent } from './filtro';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ThfModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
