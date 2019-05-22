import { Component, OnInit } from '@angular/core';
import { RegisUsuarioService } from '../services/regis-usuario.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Regis_usuario } from '../models/Regis_usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {
  usuarios: Regis_usuario = {
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
  constructor(public regisusuarioService: RegisUsuarioService,private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    this.getUsuarios();
   if (params.iduser) {
    this.regisusuarioService.getUsuario(params.iduser).subscribe(
     res => {
       console.log(res);
       this.usuarios = res;
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
   saveNuevoUsuario() {
    console.log('entro');
    this.regisusuarioService.saveUsuario(this.usuarios).subscribe(
      res => {
        console.log('entro 2');
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }

  updateUnUsuario() {
    console.log('entro');
    this.regisusuarioService.updateUsuario(this.usuarios.iduser, this.usuarios).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    );
  }

}


