import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

url = "http://localhost:8080/api/cursos";


  constructor(private http: HttpClient) { }

  cadastrar(obj: any){
    console.log("Cheguei no service.");
    console.log(obj);
    this.http.post(this.url, obj);
    return this.http.post(this.url, obj);
  }
  buscar(){
    return this.http.get(this.url);
  }
}
