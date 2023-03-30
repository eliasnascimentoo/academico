import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/servicos/aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos?: any;
c: any;

constructor(private service: AlunoService){
}
  ngOnInit(): void {
    this.retrieve();
    console.log(this.alunos);
  }

  retrieve(): void {
    this.service.buscar()
    .subscribe({
      next: (data) => {
        this.alunos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}