import { Component } from '@angular/core';
import { AlunoService } from 'src/app/servicos/aluno.service';

@Component({
  selector: 'app-incluiraluno',
  templateUrl: './incluiraluno.component.html',
  styleUrls: ['./incluiraluno.component.css']
})
export class IncluiralunoComponent {

aluno = {
  nome: '', email: '', telefone: ''
}
constructor(private service: AlunoService){
}

cadastrar(){
  alert(this.aluno.nome + "\n" + this.aluno.email + "\n" + this.aluno.telefone);
  this.service.cadastrar(this.aluno);
}

}
