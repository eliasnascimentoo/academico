import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = "http://localhost:8080/api/aluno";
  
  
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
  
