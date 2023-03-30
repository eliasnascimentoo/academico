import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { TurmasComponent } from './paginas/turmas/turmas.component'; 
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { ProfessoresComponent } from './paginas/professores/professores.component';
import { IncluircursoComponent } from './paginas/incluircurso/incluircurso.component';
import { IncluiralunoComponent } from './paginas/incluiraluno/incluiraluno.component';
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'cursos', component: CursosComponent},
  { path: 'turmas', component: TurmasComponent},
  { path: 'alunos', component: AlunosComponent},
  { path: 'professores', component: ProfessoresComponent},
  { path: 'incluir-curso', component: IncluircursoComponent},
  { path: 'incluir-aluno', component: IncluiralunoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
