import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../constantes";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarritoServices {

    constructor(private http: HttpClient) {}

    verCarrito(): Observable<any>{
        let token = localStorage.getItem('token');
        let header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token,
            'Host':'MI PC',
        });
        console.log('Bearer '+token);
        let params = new URLSearchParams();
        params.set('direction','ABC');
        params.set('preview','true');
        params.set('reference','ABC');
        params.set('shoppingId','19');
        params.set('suscriptionId','1');
        params.set('deliveryId','1');
        return this.http.post(environment.CARRITO,params.toString(), {headers: header}).pipe(map(response => {
            console.log('Bearer ');
            console.log(response);
            return response;
        }));
    }    
    
}