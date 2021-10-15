import { Component, OnInit } from '@angular/core';
import { ThfComboComponent, ThfComboOption, ThfMultiselectOption, ThfRadioGroupOption } from '@totvs/thf-ui';
import { FiltroService } from './filtro.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
  providers: [FiltroService]
})
export class FiltroComponent implements OnInit {

  getDetalhe: Array<string> = []
  getDetalheOptions
  getConfere: Array<string> = []
  getConfereOptions
  cod_emitente_ini: string
  cod_emitente_fim: string
  nro_docto_ini: string
  nro_docto_fim: string
  serie_docto_ini: string
  serie_docto_fim: string
  nat_operacao_ini: string
  nat_operacao_fim: string
  cod_estabel_ini: string
  cod_estabel_fim: string
  dt_trans_ini: Date
  dt_trans_fim: Date
  i_confere: string
  l_detalhe: boolean
  calendar
  event
  locale: string

  tableColumns: Array<any>


  constructor(
    private filtroService: FiltroService
  ) { }

  ngOnInit(): void {

    this.getConfereOptions = this.filtroService.getConfere()
    this.getDetalheOptions = this.filtroService.getDetalhe()
  }

  readonly localeOptions: Array<ThfRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'es', value: 'es' },
    { label: 'en', value: 'en' }
  ];

  changeEvent(event: string) {
    this.event = event;
  }



  ok(): void {
   var dataInputIni = this.dt_trans_ini
   var datainputFim = this.dt_trans_fim
   var dataIni = new Date(dataInputIni)
   var dataFim = new Date(datainputFim)

   const dataFormatadaIni = dataIni.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
   const dataFormatadaFim = dataFim.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
   console.log(this.cod_emitente_ini)
  }

}
