import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../constantes";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationServices {

    constructor(private http: HttpClient) {}

    login(user: string, pass: string): Observable<any> {
        let credenciales = btoa('angularapp'+ ':'+ '12345');
        let header = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic '+credenciales,
        });
        let params = new URLSearchParams();
        params.set('grant_type','password');
        params.set('username',user);
        params.set('password',pass);
        return this.http.post<any>(environment.LOGIN, params.toString(),{headers: header}).pipe(map(response => {
            // console.log(response.access_token);
            localStorage.setItem('token',response.access_token);
            return response;
        }));
    }

    registro(amaterno:string, apaterno:string, departamento:string, distrito:string, email:string, estado:string,
        nombres:string, dni:string, provincia:string, ubigeo:string, usuario:string, password:string){
        return this.http.post<any>(environment.REGISTRAR,{
            "apemat": amaterno,
            "apepat": apaterno,
            "departamento": departamento,
            "distrito": distrito,
            "email": email,
            "estado": estado,
            "nombres": nombres,
            "numdoc": dni,
            "provincia": provincia,
            "tipodoc": "1",
            "ubigueo": ubigeo,
            "usuario": usuario,
            "password" : password,
        },{}).pipe(map(response => {
            console.log(response);
            return response;
        }))
    }
}
