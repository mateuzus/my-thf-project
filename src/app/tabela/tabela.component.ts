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
  tableData: Array<any> = new Array
  title: any


  constructor(
    private tabelaService: TabelaService,
    public thfDialog: ThfDialogService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadInitial()
    this.listItems()
  }

  loadInitial(){
    this.loadTableColumns()
  }

  loadTableColumns(){
    this.tableColumns = this.tabelaService.getColumns(this)
    return this
  }

  listItems(){
    /* this.tabelaService.getItems().subscribe(tableData => {
      this.tableData = tableData
    }, err => {
      console.log('Erro ao listar os dados', err)
    }) */
  }
}
