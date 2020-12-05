import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { PdfMakeWrapper, Txt, Columns} from 'pdfmake-wrapper';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {

  monto: string;
  email: string;
  fecha: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.monto = localStorage.getItem('montocompra');
    var hoy = new Date();
    var mes_posicion = Number(hoy.getMonth());
    var meses = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    var mes = meses[mes_posicion];
    var minuto_x = hoy.getMinutes();
    var minuto;
    if(minuto_x < 10) {
      minuto = '0'+minuto_x;
    }
    else {
      minuto = minuto_x;
    }
    this.fecha = hoy.getFullYear() + "/" + mes + "/" + hoy.getDate() + ' ' + hoy.getHours() + ':' + minuto;

  }

  volver(){
    this.router.navigate(['recibo']);
  }

  async generatePdf(){
    const pdf = new PdfMakeWrapper();
    pdf.add(
      new Txt('PAGO REALIZADO').alignment('center').fontSize(22).bold().margin(8).end,
    );
    pdf.add(
      new Txt('A continuación se muestra el detalle del pago realizado:').alignment('left').fontSize(15).margin(4).end,
    );
    pdf.create().download('Recibo de  '+ this.email);
  }
}
