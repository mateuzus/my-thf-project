import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThfDialogService, ThfModalAction, ThfModalComponent, ThfNotificationService, ThfRadioGroupOption } from '@totvs/thf-ui';


import { TabelaService } from './tabela.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  providers: [TabelaService]
})

export class TabelaComponent implements OnInit {


  carregou_items: boolean = false
  tableColumns: Array<any>
  tableData
  title: any
  response: any;
  getDetalhe: Array<string> = []
  getDetalheOptions
  getConfere: Array<string> = []
  getConfereOptions
  calendar
  event
  locale: string
  modal_type = 'getAssignature'
  show_loading: boolean = false
  isHideLoading = true

  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(ThfModalComponent, { static: true }) thfModal: ThfModalComponent

  params = {
    "cod-emitente-ini": '',
    "cod-emitente-fim": '',
    "nro-docto-ini": '',
    "nro-docto-fim": '',
    "serie-docto-ini": '',
    "serie-docto-fim": '',
    "nat-operacao-ini": '',
    "nat-operacao-fim": '',
    "cod-estabel-ini": '',
    "cod-estabel-fim": '',
    "dt-trans-ini": '',
    "dt-trans-fim": '',
    "i-confere": '',
    "l-detalhe": ''
  }

  constructor(
    private tabelaService: TabelaService,
    public thfDialog: ThfDialogService,
    private thfNotification: ThfNotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getConfereOptions = this.tabelaService.getConfere()
    this.getDetalheOptions = this.tabelaService.getDetalhe()
    this.loadInitial()

  }

  loadInitial(){
    this.loadTableColumns()
  }

  loadTableColumns(){
    this.tableColumns = this.tabelaService.getColumns(this)
    return this
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
    this.isHideLoading = false
    this.tabelaService.getParams(this.params).subscribe(tableData => {
      this.tableData = tableData.items[0].ds_seqdocumest['tt-docum-est']
      console.log(tableData)
      this.isHideLoading = true
      const message = 'Sucesso'
      this.thfNotification.success(message)
    }, err => {
      console.log('Erro ao listar os dados', err),
      this.isHideLoading = true
    })
    this.closeModal()
  }
}
