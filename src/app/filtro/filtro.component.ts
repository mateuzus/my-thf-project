import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThfRadioGroupOption } from '@totvs/thf-ui';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  //@ViewChild('cod_emitente_ini', {static: true}) cod_emitente_ini: ElementRef

  constructor() { }



  ngOnInit() {
   // this.restore();
  }


  public cod_emitente_ini: string
  public cod_emitente_fim: string
  public nro_docto_ini: string
  public nro_docto_fim: string
  public serie_docto_ini: string
  public serie_docto_fim: string
  public nat_operacao_ini: string
  public nat_operacao_fim: string
  public cod_estabel_ini: string
  public cod_estabel_fim: string
  public dt_trans_ini: string | Date;
  public dt_trans_fim: string | Date;
  public i_confere: string
  public l_detalhe: boolean



  calendar;
  event;
  locale: string;


  readonly localeOptions: Array<ThfRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'es', value: 'es' },
    { label: 'en', value: 'en' }
  ];



  changeEvent(event: string) {
    this.event = event;
  }

 /* restore() {
    this.calendar = undefined;
    this.event = undefined;
    this.locale = undefined;
    this.dt_trans_ini = undefined;
    this.dt_trans_fim = undefined;
  } */

  valueDropDown() {

  }

  ok() {
    console.log(this.cod_emitente_ini, this.cod_emitente_fim, this.dt_trans_ini, this.dt_trans_fim)
  }
}

