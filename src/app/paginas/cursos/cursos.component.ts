import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicos/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos?: any;
c: any;

constructor(private service: CursoService){
}
  ngOnInit(): void {
    this.retrieve();
    console.log(this.cursos);
  }

  retrieve(): void {
    this.service.buscar()
    .subscribe({
      next: (data) => {
        this.cursos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
