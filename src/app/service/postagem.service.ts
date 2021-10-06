import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }


  token =  {
    headers: new HttpHeaders().
    set('Authorization', environment.token )
    }

    getAllPostagem(): Observable<Postagem[]>{
      return this.http.get<Postagem[]>('https://genblogpessoalbiagomes.herokuapp.com/postagens', this.token)

    }

    postpostagem(postagem: Postagem): Observable<Postagem>{
      return this.http.post<Postagem>('https://genblogpessoalbiagomes.herokuapp.com/postagens', postagem, this.token)

    }

  }
