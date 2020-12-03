import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationServices} from '../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isLoading = false;
  registroForm: FormGroup;
  constructor(
    private AuthenticationServices: AuthenticationServices,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(5) ]],
      contraseña: ['', [Validators.required, Validators.minLength(5) ]],
      nombres: ['', [Validators.required, ]],
      paterno: ['', [Validators.required,  ]],
      materno: ['', [Validators.required,  ]],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^[0-9]\d*$/) ]],
      departamento: ['', [Validators.required,  ]],
      provincia: ['', [Validators.required,  ]],
      distrito: ['', [Validators.required, ]],
      ubigeo: ['', [Validators.required,  ]],
      email: ['', [Validators.required, Validators.email ]],
    });
  }

  get f() { return this.registroForm.controls; }

  onSubmit() {
    const dialogRef = this.dialog.open(ModalComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => this.router.navigate(['/login']));
    // this.isLoading = true;
    // var usuario = this.f.usuario.value;
    // var contraseña = this.f.contraseña.value;
    // var nombres = this.f.nombres.value;
    // var paterno = this.f.paterno.value;
    // var materno = this.f.materno.value;
    // var dni = this.f.dni.value;
    // var departamento = this.f.departamento.value;
    // var provincia = this.f.provincia.value;
    // var distrito = this.f.distrito.value;
    // var ubigeo = this.f.ubigeo.value;
    // var email = this.f.email.value;
    // this.AuthenticationServices.registro(materno,paterno,departamento,distrito,email,"1",nombres,dni,provincia,ubigeo,usuario,contraseña).subscribe(result => {
    //   const dialogRef = this.dialog.open(ModalComponent, {restoreFocus: false});
    //   this.dialog.open(ModalComponent);
    //   dialogRef.afterClosed().subscribe(() => this.router.navigate(['/login']));
    //   this.isLoading = false;
    // },
    // error => {
    //   this.isLoading = false;
    //   this._snackBar.open("Error al registrarse", "", { duration: 3000, panelClass: ['bg-danger', 'color-white'] });
    // })

    // this.registroForm.clearValidators();
  }

}
