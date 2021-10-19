import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { TabelaComponent } from './tabela'

const routes: Routes = [
  {path: '', redirectTo: '/consulta-nf', pathMatch: 'full'},
  { path: '/consulta-nf', component: TabelaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
