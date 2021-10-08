import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }


  token =  {
    headers: new HttpHeaders().
    set('Authorization', environment.token )
    }
    
    getAllTema(): Observable<Tema[]>{
      return this.http.get<Tema[]>('https://backendblogpessoal.herokuapp.com/tema', this.token)
    }

    getByIdTema(id: number): Observable<Tema>{
      return this.http.get<Tema>(`https://backendblogpessoal.herokuapp.com/tema/${id}`, this.token)

    }

    postTema(tema: Tema): Observable<Tema>{
      return this.http.post<Tema>('https://backendblogpessoal.herokuapp.com/tema', tema, this.token)
    }

    putTema(tema: Tema): Observable<Tema>{
      return this.http.put<Tema>('https://backendblogpessoal.herokuapp.com/tema', tema, this.token)
    }

    deleteTema(id: number): Observable<Tema>{
      return this.http.delete<Tema>(`https://backendblogpessoal.herokuapp.com/tema/${id}`, this.token)

    }

  }


