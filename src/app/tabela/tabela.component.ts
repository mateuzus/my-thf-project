import { Component, Input, OnInit, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {
  ThfDialogService,
  ThfModalAction,
  ThfModalComponent,
  ThfNotificationService,
  ThfPageAction,
} from "@totvs/thf-ui";

import { TabelaService } from "./tabela.service";

@Component({
  selector: "app-tabela",
  templateUrl: "./tabela.component.html",
  styleUrls: ["./tabela.component.css"],
  providers: [TabelaService],
})
export class TabelaComponent implements OnInit {
  titleToolbar = "Alpino - Tela Real 8001";

  menus = [{ label: "Consultar NF", link: "./consulta-nf" }];

  carregou_items: boolean = false;
  tableColumns: Array<any>;
  tableDataA;
  tableDataB;
  @Output() ttDocFiscal: Array<any>;
  @Output() ttConta: Array<any>;
  @Output() ttItemDoc: Array<any>;
  @Output() ttDuplicata: Array<any>;

  title: any;
  response: any;
  getDetalhe: Array<string> = [];
  getDetalheOptions;
  getConfere: Array<string> = [];
  getConfereOptions;
  calendar;
  event;
  locale: string;
  modal_type = "getAssignature";
  show_loading: boolean = false;
  isHideLoading = true;
  codEmitente;
  codEstabel;
  dtTrans;
  iConfere;
  natOper;
  numDoc;
  serieDoc;
  

  @ViewChild("optionsForm", { static: true }) form: NgForm;
  @ViewChild(ThfModalComponent, { static: true }) thfModal: ThfModalComponent;

  params = {
    "cod-emitente-ini": "",
    "cod-emitente-fim": "",
    "nro-docto-ini": "",
    "nro-docto-fim": "",
    "serie-docto-ini": "",
    "serie-docto-fim": "",
    "nat-operacao-ini": "",
    "nat-operacao-fim": "",
    "cod-estabel-ini": "",
    "cod-estabel-fim": "",
    "dt-trans-ini": "",
    "dt-trans-fim": "",
    "i-confere": "",
  };

  constructor(
    private tabelaService: TabelaService,
    public thfDialog: ThfDialogService,
    private thfNotification: ThfNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getConfereOptions = this.tabelaService.getConfere();
    this.getDetalheOptions = this.tabelaService.getDetalhe();
    this.loadInitial();
  }

  public readonly actions: Array<ThfPageAction> = [
    { label: "Filtro", action: this.abrirModalAdd.bind(this), disabled: false },
  ];

  private modal_primary_action_detalhes: ThfModalAction = {
    label: "Detalhes",
    danger: false,
    action: () => {
      this.abrirModalDetalhes();
    },
  };

  private modal_primary_action_add: ThfModalAction = {
    label: "Salvar",
    danger: false,
    action: () => {
      this;
      this.detailOrderA();
    },
  };

  loadInitial() {
    this.loadTableColumns();
  }

  loadTableColumns() {
    this.tableColumns = this.tabelaService.getColumns(this);
    return this;
  }

  close: ThfModalAction = {
    action: () => {
      this.closeModal();
    },
    label: "Cancelar",
    danger: true,
  };

  confirm: ThfModalAction = {
    action: () => {
      this.detailOrderA();
    },
    label: "Confirmar",
  };

  changeEvent(event: string) {
    this.event = event;
  }

  getShowLoadding() {
    return this.show_loading;
  }

  setShowLoading(v) {
    this.show_loading = v;
    return this;
  }

  openModalAdd() {
    this.modal_type = "add";
    this.thfModal.open();
  }

  closeModal() {
    this.thfModal.close();
  }

  abrirModalAdd() {
    // this.loadEpis();
    this.title = "Adicionar";
    this.modal_type = "add";
    this.thfModal.open();
  }

  addActionOnItems() {
    this.tableDataA = this.tableDataA.map((item) => {
      item["actions"] = ["detalhar"];
      return item;
    });
  }

  getPrimaryAction() {
    let actions = {
      detail: this.modal_primary_action_detalhes,
      add: this.modal_primary_action_add,
    };

    return actions[this.modal_type];
  }

  detailOrderA() {
    this.isHideLoading = false;

    this.tabelaService.realA(
      this.params,
      (tableDataA) => {
        this.tableDataA =
          tableDataA.items[0].ds_doc_fiscal["tt-conf-doc-fiscal"];
        this.addActionOnItems();
        this.isHideLoading = true;
      },
      (err) => {
        console.log("Erro ao listar os dados", err),
          (this.isHideLoading = true);
      }
    );
    this.closeModal();
  }

  abrirModalDetalhes(value?): void {
    this.isHideLoading = false;

    let conferido: number;

    if (value["conferido"] === false) {
      conferido = 1;
    } else if (value["conferido"] === true) {
      conferido = 2;
    }

    this.codEmitente = value["cod-emitente"];
    this.codEstabel = value["cod-estabel"];
    this.dtTrans = value["dt-trans"];
    this.iConfere = conferido;
    this.natOper = value["nat-operacao"];
    this.numDoc = value["nro-docto"];
    this.serieDoc = value["serie-docto"];

    let params = {
      "cod-emitente-fim": value["cod-emitente"],
      "cod-emitente-ini": value["cod-emitente"],
      "cod-estabel-fim": value["cod-estabel"],
      "cod-estabel-ini": value["cod-estabel"],
      "dt-trans-fim": value["dt-trans"],
      "dt-trans-ini": value["dt-trans"],
      "i-confere": conferido,
      "nat-operacao-fim": value["nat-operacao"],
      "nat-operacao-ini": value["nat-operacao"],
      "nro-docto-fim": value["nro-docto"],
      "nro-docto-ini": value["nro-docto"],
      "serie-docto-fim": value["serie-docto"],
      "serie-docto-ini": value["serie-docto"],
      "l-detalhe": true,
    };

    this.tabelaService.realB(
      params,
      (tableDataB) => {
        console.log(tableDataB);
        this.tableDataB = tableDataB.items[0].ds_seqdocumest["tt-docum-est"];
        this.ttDocFiscal = tableDataB.items[0].ds_seqdocumest["tt-doc-fiscal"];
        this.ttConta = tableDataB.items[0].ds_seqdocumest["tt-imposto"];
        this.ttItemDoc = tableDataB.items[0].ds_seqdocumest["tt-item-doc-est"];
        this.ttDuplicata = tableDataB.items[0].ds_seqdocumest["tt-dupli-apagar"];
        console.log(
          "ttDocFiscal",
          this.ttDocFiscal,
          "ttConta",
          this.ttConta,
          "ttItem",
          this.ttItemDoc,
          "ttDuplicata",
          this.ttDuplicata
        );
        this.isHideLoading = true;
        this.goToDados();
        /* window.open("danfe?cod-emitente=" + value["cod-emitente"] + "?" +
        "cod-estabel-fim" + value["cod-estabel"],
        "_blank") //abrir nova janela */
      },
      (err) => {
        console.log("Erro ao listar", err);
      }
    );
  }

  goToDados() {

    const link = this.router.serializeUrl(this.router.createUrlTree(['/danfe'], {queryParams: {
      "cod-emitente-fim": this.codEmitente,
        "cod-estabel-fim": this.codEstabel,
        "dt-trans-fim": this.dtTrans,
        "i-confere": this.iConfere,
        "nat-operacao-fim": this.natOper,
        "nro-docto-fim": this.numDoc,
        "serie-docto-fim": this.serieDoc,
        "l-detalhe": true
    }}))

    window.open(link, "_blank")

     /* this.router.navigate(["/danfe"], {
      queryParams: {
        "cod-emitente-fim": this.codEmitente,
        "cod-estabel-fim": this.codEstabel,
        "dt-trans-fim": this.dtTrans,
        "i-confere": this.iConfere,
        "nat-operacao-fim": this.natOper,
        "nro-docto-fim": this.numDoc,
        "serie-docto-fim": this.serieDoc,
        "l-detalhe": true
      },
    }) */
  }
}
