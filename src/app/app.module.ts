import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FiltroComponent } from './filtro';
import { TabelaComponent, TabelaService } from './tabela';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    ThfModule,
    RouterModule.forRoot([])
  ],
  providers: [HttpClientModule,TabelaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
