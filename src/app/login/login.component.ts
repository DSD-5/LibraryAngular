import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationServices} from '../services/authentication.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationServices,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      pass: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.isLoading = true;

    // this.isLoading = true;
    //var valor = this.tipoCampo == 1 ? this.f.nrosuministro.value : this.f.dni.value;
    this.auth.login(this.f.user.value, this.f.pass.value).subscribe(result => {
      // console.log(result);
      this.isLoading = false;
      localStorage.setItem('token', result.access_token);
      // this.router.navigate(['/catalogo']);
      window.location.href = 'http://localhost:4200';
      // this.router.navigate(['/catalogo']);
    },
    error =>{
      this.isLoading = false;
      console.log(error);
      // if(error.status=500 )
      //   this._snackBar.open("Error de conexión", "", { duration: 3000, panelClass: ['bg-danger', 'color-white'] });
      // else if(error.status=200)
        this._snackBar.open("Usuario incorrecto", "", { duration: 3000, panelClass: ['bg-danger', 'color-white'] });
    });

    //this.contactForm.clearValidators();

  }
}
