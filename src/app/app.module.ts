import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { TurmasComponent } from './paginas/turmas/turmas.component';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { ProfessoresComponent } from './paginas/professores/professores.component';
import { IncluircursoComponent } from './paginas/incluircurso/incluircurso.component';
import { FormsModule } from '@angular/forms';
import { IncluiralunoComponent } from './paginas/incluiraluno/incluiraluno.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CursosComponent,
    TurmasComponent,
    AlunosComponent,
    ProfessoresComponent,
    IncluircursoComponent,
    IncluiralunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
