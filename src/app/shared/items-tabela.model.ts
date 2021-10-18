export class itemsTabela {

  nro_docto: string
  dt_trans: string
  cod_emitente: number
  cod_estabel: string
  dt_atualizacao: string
  dt_emissao: string
  conferido: boolean
  serie_docto: string
  qtd_conferencia: number
  nat_operacao: string

  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}


