import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DanfeService } from "./danfe.service";

@Component({
  selector: "app-danfe",
  templateUrl: "./danfe.component.html",
  styleUrls: ["./danfe.component.css"],
})
export class DanfeComponent implements OnInit {
  tableColumns: Array<any>;
  tableColumns1: Array<any>;
  tableColumns2: Array<any>;
  tableColumns3: Array<any>;
  tableColumns4: Array<any>

  tableData;
  ttDocFiscal;
  ttConta;
  ttItemDoc;
  ttDuplicata;
  ttContaMovto
  isHideLoading = true

  constructor(
    private danfeService: DanfeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadInitial();

    this.route.queryParams.subscribe((params) => {
      this.isHideLoading = false
      let emit = parseInt(params["cod-emitente-fim"]);
      let conf = parseInt(params["i-confere"]);

      let params2 = {
        "cod-emitente-fim": emit,
        "cod-emitente-ini": emit,
        "cod-estabel-fim": params["cod-estabel-fim"],
        "cod-estabel-ini": params["cod-estabel-fim"],
        "dt-trans-fim": params["dt-trans-fim"],
        "dt-trans-ini": params["dt-trans-fim"],
        "i-confere": conf,
        "nat-operacao-fim": params["nat-operacao-fim"],
        "nat-operacao-ini": params["nat-operacao-fim"],
        "nro-docto-fim": params["nro-docto-fim"],
        "nro-docto-ini": params["nro-docto-fim"],
        "serie-docto-fim": params["serie-docto-fim"],
        "serie-docto-ini": params["serie-docto-fim"],
        "l-detalhe": false,
      };

      this.danfeService.realB(params2, (tableData) => {
        this.ttDocFiscal = tableData.items[0].ds_seqdocumest["tt-doc-fiscal"]
        this.ttConta = tableData.items[0].ds_seqdocumest["tt-imposto"]
        this.ttItemDoc = tableData.items[0].ds_seqdocumest["tt-item-doc-est"]
        this.ttDuplicata = tableData.items[0].ds_seqdocumest["tt-dupli-apagar"]
        this.ttContaMovto = tableData.items[0].ds_seqdocumest["tt-conta-resumo"]
        console.log(this.ttContaMovto)
        this.isHideLoading = true
      });
    });
  }

  loadInitial() {
    this.loadTableColumns();
  }

  loadTableColumns() {
    this.tableColumns = this.danfeService.getColumns(this);
    this.tableColumns1 = this.danfeService.getColumnsttConta(this);
    this.tableColumns2 = this.danfeService.getColumnsItemDoc(this);
    this.tableColumns3 = this.danfeService.getColumnsDuplicatas(this);
    this.tableColumns4 = this.danfeService.getColumnsContaMvto(this);
    return this;
  }
}
