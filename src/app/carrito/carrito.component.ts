import { Component, OnInit } from '@angular/core';
import { CarritoServices } from '../services/carrito.service';
import { ActivatedRoute, Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  error = false;
  isLoading = false;
  carrito: any;
  libro: any;
  total: number = 0;
  constructor(
    private carritoService: CarritoServices,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.carritoService.verCarrito('true').subscribe(result => {
      this.libro = result.PurchaseDetailType;
      this.carrito = result;
      this.libro.forEach((item) =>
        this.total = Number(item.subtotal) + this.total
      );
      localStorage.setItem('montosinenvio', this.total.toString());
      this.isLoading = false;
    },
    error =>{
      this.error = true;
      this.isLoading = false;
    });
  }


  comprar(){
    this.router.navigate(['compra']);
  }

  actualizar(id: number, tipo: string){
    var c =<HTMLInputElement> document.getElementById('cantidad');
    var cantidad = c.value;
    this.isLoading = true;
    this.carritoService.agregarProducto(id, Number(cantidad), tipo).subscribe(result => {
      this.isLoading = false;
      location.reload();
    },
    error => {
      this.isLoading = false;
    });
  }

}
