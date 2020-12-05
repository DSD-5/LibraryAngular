import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logueado: boolean;
  carritolleno: boolean;
  mobileQuery: MediaQueryList;
  typesOfShoes: string[] = ['Categorías', 'Novedades'];

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from({length: 50}, () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(){

    if(localStorage.getItem('token')) {
      this.logueado = true;
    }
    else {
      this.logueado = false;
    }

    if(localStorage.getItem('carritolleno') === 'si'){
      //console.log('si');
      this.carritolleno = true;
    }
    else{
      //console.log('no');
      this.carritolleno = false;
    }


  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('idcarrito');
    localStorage.removeItem('carritolleno');
    localStorage.removeItem('email');
    localStorage.removeItem('montocompra');
    window.location.href = 'http://tutiempolibro.cf/';
    // window.location.href = 'http://localhost:4200';
  }
  shouldRun = true;

}

