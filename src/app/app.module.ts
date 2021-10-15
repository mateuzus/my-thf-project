import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FiltroComponent } from './filtro';
import { TabelaComponent, TabelaService } from './tabela';

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
  providers: [TabelaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
