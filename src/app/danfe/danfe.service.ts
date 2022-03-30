import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class DanfeService {

  private baseUrl: string = environment.base_url_api;

  constructor(private http: HttpClient) {}

  getColumns(component_instance) {
    return [
      { property: "dt-docto", label: "Data", currency: 'BRL'},
      { property: "esp-docto", label: "ESP" },
      { property: "serie", label: "Serie" },
      { property: "nr-doc-fis", label: "Docum" },
      { property: "dt-emis-doc", label: "Emissão" },
      { property: "cod-emitente", label: "Emitente" },
      { property: "estado", label: "Estado" },
      { property: "observacao", label: "Observação", width: "30%" },
    ];
  }

  getColumnsttConta(component_instance) {
    return [
      { property: "vl-imposto", label: "Valor Contabil", currency: 'BRL' },
      { property: "nat-operacao", label: "CFOP" },
      { property: "imposto", label: "Imp" },
      { property: "aliquota", label: "Al" },
      { property: "cod-tributacao", label: "T" },
      { property: "vl-base", label: "Valor Base" },
      { property: "vl-imposto", label: "Valor Imposto" },
    ];
  }

  getColumnsItemDoc(component_instance) {
    return [
      { property: "sequencia", label: "Seq" },
      { property: "it-codigo", label: "Item" },
      { property: "un", label: "UN" },
      { property: "cod-depos", label: "Dep Local." },
      { property: "quantidade", label: "Quantidade" },
      { property: "num-pedido", label: "Pedido" },
      { property: "numero-ordem", label: "Ord. Compra" },
      { property: "parcela", label: "Par" },
      { property: "desc-item", label: "Descrição" },
    ];
  }

  getColumnsContaMovto(component_instance){
    return [
      { property: 'conta', label: 'Conta' },
      { property: 'titulo', label: 'Título' },
      { property: 'debito', label: 'Valor Débito' },
    ]
  }

  getColumnsDuplicatas(component_instance){
    return [
      { property: 'parcela', label: 'Parc' },
      { property: 'cod-esp', label: 'ESP' },
      { property: 'tp-despesa', label: 'TP Desp' },
      { property: 'dt-emissao', label: 'Emissão' },
      { property: 'dt-trans', label: 'Transação' },
      { property: 'dt-vencim', label: 'Vencimento' },
      { property: 'vlr-pagar', label: 'Vlr Duplicata' },
      { property: 'desconto', label: 'Desconto' },
      { property: 'dt-venc-desc', label: 'Vcto Desc' },
      { property: 'nr-duplic', label: 'Duplicata' },
    ]
  }

  getColumnsContaMvto(component_instance){
    return [
      { property: 'id', label: 'ID' },
      { property: 'conta', label: 'Conta' },
      { property: 'id-docum-est', label: 'ID Doc' },
      { property: 'titulo', label: 'Título' },
      { property: 'debito', label: 'Valor Débito' },
      { property: 'credito', label: 'Valor Crédito' },

    ]
  }

  realB(params, sucess_func?, error_func?) {

    let url = this.baseUrl + 'api-real8001b.r'

    let headers_send = new HttpHeaders();
    headers_send = headers_send.append("Authorization", "Basic " + btoa("maikon:Titi@01titi"))
    headers_send = headers_send.append("Content-Type", "application/json")

    let params2 = {
      "tt-param": params
    }

    return this.http.post(url, params2, {
      headers: headers_send,
      responseType: 'json',
      withCredentials: true
    }).subscribe(
      sucess_func,
      error_func
    )
  }
}
