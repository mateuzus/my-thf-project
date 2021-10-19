import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThfModalAction, ThfModalComponent, ThfRadioGroupOption } from '@totvs/thf-ui';
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
  calendar
  event
  locale: string
  tableColumns: Array<any>
  modal_type = 'getAssignature'
  show_loading: boolean = false
  thfNotification: any
  tableData: any

  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(ThfModalComponent, { static: true }) thfModal: ThfModalComponent

  params = {
    cod_emitente_ini: '',
    cod_emitente_fim: '',
    nro_docto_ini: '',
    nro_docto_fim: '',
    serie_docto_ini: '',
    serie_docto_fim: '',
    nat_operacao_ini: '',
    nat_operacao_fim: '',
    cod_estabel_ini: '',
    cod_estabel_fim: '',
    dt_trans_ini: '',
    dt_trans_fim: '',
    i_confere: '',
    l_detalhe: ''
  }




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

  close: ThfModalAction = {
    action: () => {
      this.closeModal()
    },
    label: 'Cancelar',
    danger: true
  }

  confirm: ThfModalAction = {
    action: () => {
      this.proccessOrder()
    },
    label: 'Confirmar'
  }

  changeEvent(event: string) {
    this.event = event;
  }

  getShowLoadding() {
    return this.show_loading
  }

  setShowLoading(v) {
    this.show_loading = v
    return this
  }

  closeModal() {
    this.thfModal.close()
  }

  private proccessOrder() {
     this.filtroService.getParams(this.params).subscribe(tableData => {
      this.tableData = tableData
      console.log(tableData)
    }, err => {
      console.log('Erro ao listar os dados', err)
    })

  }

  ok() {
    console.log(this.params)
  }
}
