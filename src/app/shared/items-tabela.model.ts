export class itemsTabela {
  nro_docto: string
  dt_trans: string
  cod_emitente: string
  cod_estabel: string
  dt_atualizacao: string
  dt_emissao: string
  conferido: string
  serie_docto: string
  qtd_conferencia: string
  nat_operacao: string


  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}


