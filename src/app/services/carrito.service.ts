import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../constantes";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarritoServices {

    constructor(private http: HttpClient) {}

    verCarrito(preview: string): Observable<any>{
        let carritoid = localStorage.getItem('idcarrito');
        let token = localStorage.getItem('token');
        let header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        });
        // console.log(token);
        let params = new URLSearchParams();
        params.set('direction','ABC');
        params.set('preview',preview);
        params.set('reference','ABC');
        params.set('shoppingId','2');
        params.set('suscriptionId','1');
        params.set('deliveryId','1');
        return this.http.post(environment.CARRITO.replace("{direction}","ABC").replace("{preview}",preview)
        .replace("{reference}","ABC").replace("{shoppingId}",carritoid).replace("{suscriptionId}","1")
        .replace("{deliveryId}","1"), {}, {headers: header}).pipe(map(response => {
            // console.log('Bearer ');
            // console.log(response);
            return response;
        }));
    }

    agregarProducto(libroid: number, cantidad: number, tipo: string): Observable<any>{
      let token = localStorage.getItem('token');
      let cliente = localStorage.getItem('idpersona');
      //console.log(cliente);
        let header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        });
      return this.http.post(environment.ADD_CARRITO.replace("{bookId}", libroid.toString()).replace("{clientId}",cliente.toString())
      .replace("{quantity}", cantidad.toString()).replace("{type}", tipo.toString()),{},{headers: header}).pipe(map(response => {
        return response;
      }))
    }

    generarTokenVisa(): Observable<any> {
      const url = environment.URL_TOKEN_VISA;

      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('integraciones.visanet@necomplus.com' + ':' + 'd5e7nk$M'),
      });

      return this.http.get(url, { headers: header, responseType: 'text' });
    }

    generarSesionVisa(token: string, monto: number, merchantid: string): Observable<any> {
      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
      });
      const url = environment.URL_SESION_VISA;
      const channel = 'web';
      return this.http.post(url + merchantid, { 'amount': monto, "antifraud": null, "channel": channel}, { headers: header });
    }

    autorizacionVisa(token, transactionToken, purchase, amount, merchantid: string): Observable<any> {
      const url = environment.URL_AUTORIZACION_VISA;
      const merchant = merchantid;
      const channel = 'web';
      const currency = 'PEN';
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
      });
      const order = { 'amount' : amount, 'tokenId': transactionToken, 'purchaseNumber': purchase, 'currency': currency };
      return this.http.post(url + merchant, { 'antifraud': null, 'captureType': 'manual', "countable": true, "channel": channel, 'order': order}, { headers: headers });
    }
}
