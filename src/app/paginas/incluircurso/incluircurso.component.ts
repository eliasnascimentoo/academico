import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/servicos/curso.service';

@Component({
  selector: 'app-incluircurso',
  templateUrl: './incluircurso.component.html',
  styleUrls: ['./incluircurso.component.css']
})
export class IncluircursoComponent {

  curso = {
    nome: '',
    valor: '0'
  }  

  constructor(private service: CursoService,
              private roteador: Router){
  }

  cadastrar(){
    alert(this.curso.nome + "\n" + this.curso.valor);
    this.service.cadastrar(this.curso).subscribe({
      next: (res) => {
        console.log(res);
        this.roteador.navigate(['/cursos']);

      },
      error: (e) => console.error(e)
    });
  }

}
