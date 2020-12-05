import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoServices } from '../services/carrito.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../constantes';
import {Router} from "@angular/router";

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  isLoading = false;
  items: number = 0;
  delivery: number;
  carrito: any;
  libro: any;
  total: number = 0;
  total2: number = 0;
  nropedido: number;
  constructor(
    private carritoServices: CarritoServices,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.nropedido = Math.floor((Math.random() * (999999-100000))+100000);
    this.carritoServices.verCarrito('true').subscribe(result => {
      this.libro = result.PurchaseDetailType;
      this.carrito = result;
      this.delivery = result.delivery;
      this.libro.forEach((item) =>
        this.total = Number(item.subtotal) + this.total
      );
      this.libro.forEach((item) =>
        this.items = this.items +1
      );
      this.total2 = this.delivery + this.total;
      this.isLoading = false;
    },
    error =>{
      this.isLoading = false;
    });
  }


  pago(){
    this.isLoading = true;
    this.carritoServices.verCarrito('false').subscribe(result => {
      this.isLoading = false;
      localStorage.setItem('montocompra',this.total2.toString());
      this.router.navigate(['recibo']);
    },
    error =>{
      error = true;
      this.isLoading = false;
    });
  }

  pagar() {
    this.carritoServices.generarTokenVisa().subscribe(
      result => {
        this.carritoServices.generarSesionVisa(result, this.total2, this.nropedido.toString()).subscribe(
          res => {
            let form = document.createElement("form");
            form.setAttribute('method', "POST");
            form.setAttribute('action',"localhost:4200");
            form.setAttribute('id', "boton_pago");
            document.getElementById("btnPago").appendChild(form);

            let scriptEl = document.createElement('script');
            scriptEl.setAttribute('id','script_pago');
            scriptEl.setAttribute('src', environment.URL_FORMULARIO_VISA);
            scriptEl.setAttribute('data-sessiontoken', res.sessionKey);
            scriptEl.setAttribute('data-merchantid', '602545134');
            scriptEl.setAttribute('data-purchasenumber', this.nropedido.toString());
            scriptEl.setAttribute('data-merchantlogo', environment.URL_LOGO_VISA);
            scriptEl.setAttribute('data-channel', 'web');
            scriptEl.setAttribute('data-amount', this.total2.toString() );
            scriptEl.setAttribute('data-buttonsize', 'MEDIUM' );
            scriptEl.setAttribute('data-timeouturl', '5');
            document.getElementById("boton_pago").appendChild(scriptEl);

            // this.isLoading = false;
            // this.pagovisa = true;
            // this.loadvisa = false;
            // this.btnVisible = false;
            // stepper.next();
          },
          error => {
            console.log(error);
            this.isLoading = false;
            this._snackBar.open("ERROR AL GENERAR FORMULARIO DE PAGO", "", { duration: 3000, panelClass: ['bg-danger', 'color-white'] });
            return;
          }
        );
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this._snackBar.open("ERROR AL GENERAR FORMULARIO DE PAGO", "", { duration: 3000, panelClass: ['bg-danger', 'color-white'] });
        return;
      }
    );

    }


}

