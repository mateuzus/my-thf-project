import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ThfDialogService, ThfModalAction, ThfModalComponent } from '@totvs/thf-ui';
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
  tableData: Array<object>
  title: any

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent

  private modal_secondary_antion_attend: ThfModalAction = {
    label: 'Fechar',
    danger: true,
    action: () => {
      this.thfModal.close()
    }
  }


  constructor(
    private service: TabelaService,
    public thfDialog: ThfDialogService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadInitial()
  }

  loadInitial(){
    this.loadTableColumns()
  }

  loadTableColumns(){
    this.tableColumns = this.service.getColumns(this)
    return this
  }



  abrirModalDetalhe(value, row, type, title){
    this.title = title
  }
}
