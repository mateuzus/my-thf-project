import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfFieldModule, ThfLoadingModule, ThfModule } from '@totvs/thf-ui';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabelaComponent, TabelaService } from './tabela';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ThfModule,
    ThfLoadingModule,
    ThfFieldModule,

  ],
  providers: [HttpClientModule,TabelaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
