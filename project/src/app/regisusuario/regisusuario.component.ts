import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RegisusuarioService } from '../services/regisusuario.service';
import { Regisusuario } from '../models/Regisusuario';
import { Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-regisusuario',
  templateUrl: './regisusuario.component.html',
  styleUrls: ['./regisusuario.component.scss']
})
export class RegisusuarioComponent implements OnInit {
  
    regisusuario: Regisusuario = {
    iduser: 0,
    nombres: '',
    apellidos: '',
    identificacion: 0,
    correo: '',
    contrasena: '',
    createdAT: new Date,
    updateAT: new Date,
    ipTipoUsuario: 0,
    estado: 0,
    zona: 0
  }
  pageActual: number = 1;
  usuario: any = [];
  edit: boolean = false;
  public isError = false;

  constructor(private regisusuarioService: RegisusuarioService, private router: Router,private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.getUsuarios();
    const params = this.activeRoute.snapshot.params;

    if (params.iduser) {
      this.regisusuarioService.getUsuario(params.iduser).subscribe(
       res => {
         console.log(res);
         this.regisusuario = res;
         this.edit = true;
       },
       err => console.error(err)
      );
    }
  }
  getUsuarios() {
    this.regisusuarioService.getUsuarios().subscribe(
      res => {
        this.usuario = res;
        console.log(res);
      },
      err => console.log(err)
    );
   }
   onIsError(): void {
    this.isError = true;
    setTimeout (() => {
      this.isError = false;
    }, 3000)
  }

   saveNuevoUsuario(form: NgForm) {
    console.log('entro');
    this.regisusuarioService.saveUsuario(this.regisusuario).subscribe(
      res => {
        console.log('entro 2');
        console.log(res);
        this.router.navigate(['/']);
      },
      err => {
        this.onIsError()
      }
    )}



  updateUnUsuario() {
    this.regisusuarioService.updateUsuario(this.regisusuario.iduser, this.regisusuario).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    );
  }

  deleteUnUsuario(id: string) {
    this.regisusuarioService.deleteUsuario(id).subscribe(
      res => {
        console.log(res);
        this.getUsuarios();
        this.router.navigate(['/regisusuario']);
      },
      err => console.error(err)
    );
  }


}
