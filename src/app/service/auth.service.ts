import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { userLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: userLogin):Observable<userLogin>{
    return this.http.post<userLogin>(' https://genblogpessoalbiagomes.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>(' https://genblogpessoalbiagomes.herokuapp.com/usuarios/cadastrar', user)
  }
}
