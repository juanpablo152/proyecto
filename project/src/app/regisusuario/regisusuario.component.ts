import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RegisusuarioService } from '../services/regisusuario.service';
import { Regisusuario } from '../models/Regisusuario';
import { Validators, NgForm } from '@angular/forms';

/* Componente regisusuario, en este ts se realizan los métodos correspondientes para
el crud de registro de usuarios así mismo como el llamado al modelo como serán guardado
los datos.
*/
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
    //Declaración de algunas variables necesarias para la ejecución de los metodos
  //usado para paginar la tabla
  pageActual: number = 1;
    //Necesario para poder agregar un nuevo objeto

  usuario: any = [];
    //no es tan indispensable pero se uso para no tener inconveniencias con el boton guardar

  edit: boolean = false;
    //notifica el error si el usuario no relleno el formulario de manera correcta

  public isError = false;
    //Se incicializan las variables para usarlas en los métodos.

  constructor(private regisusuarioService: RegisusuarioService, private router: Router,private activeRoute: ActivatedRoute) { }
    //Se llama el método para listar los objetos y se realiza una validación para el boton guardar

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
    //Obtiene todos los objetos desde la bd

  getUsuarios() {
    this.regisusuarioService.getUsuarios().subscribe(
      res => {
        this.usuario = res;
        console.log(res);
      },
      err => console.log(err)
    );
   }
     //notifica un error si el formulario no se lleno de manera correcta

   onIsError(): void {
    this.isError = true;
    setTimeout (() => {
      this.isError = false;
    }, 3000)
  }
   //agrega un nuevo objeto

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

    //Se actualiza un objeto


  updateUnUsuario() {
    this.regisusuarioService.updateUsuario(this.regisusuario.iduser, this.regisusuario).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    );
  }
  //Se elimina un objeto

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
