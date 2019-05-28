import { Component, OnInit, HostBinding } from '@angular/core';
import { ContactoService } from '../services/contacto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Contacto } from '../models/Contacto';
import { Validators, NgForm } from '@angular/forms';

/* Componente contacto, en este ts se realizan los métodos correspondientes para
el crud de registro de usuarios así mismo como el llamado al modelo como serán guardado
los datos. Tambíen la validación para que los campos de el formulario no se vayan vacios.
*/

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contactos: Contacto = {
    id_clie: 0,
    tip_id: 'Cédula',
    nom_clie: '',
    ape_clie: '',
    dir_clie: '',
    bar_clie: '',
    tel_clie: 0,
    naci_clie: '',
    fec_clie: new Date(),
    estC_clie: 'Soltero',
    email_clie: '',
    loc_clie: '',
    id_camp: 1
  }
   //Declaración de algunas variables necesarias para la ejecución de los metodos
  //usado para paginar la tabla
  pageActual: number = 1;
    //Necesario para poder agregar un nuevo objeto

  contacto: any = [];
    //no es tan indispensable pero se uso para no tener inconveniencias con el boton guardar

  edit: boolean = false;
    //notifica el error si el usuario no relleno el formulario de manera correcta

  public isError = false;
      //Se incicializan las variables para usarlas en los métodos.

  constructor(private contactoService: ContactoService,private router: Router,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
   this.getContactos();
   const params = this.activeRoute.snapshot.params;
   if (params.id_clie) {
    this.contactoService.getContacto(params.id_clie).subscribe(
     res => {
       console.log(res);
       this.contactos = res;
       this.edit = true;
     },
     err => console.error(err)
    );
  }
  }
  //Obtiene todos los objetos desde la bd
  getContactos() {
    this.contactoService.getContactos().subscribe(
      res => {
        this.contacto = res;
        console.log(res);
      },
      err => console.log(err)
    );
   }
   //agrega un nuevo objeto

  saveNuevoContacto(form: NgForm) {
    if (form.valid) {
      console.log('entro');
//   delete this.game.id;
    this.contactoService.saveContacto(this.contactos).subscribe(
      res => {
        console.log('entro 2');
        console.log(res);
        this.router.navigate(['/']);
        this.isError = false;
      },
      err => { this.onIsError()
      }
    )} else {
      this.onIsError();
    }
  }
  //notifica un error si el formulario no se lleno de manera correcta

  onIsError(): void {
    this.isError = true;
    setTimeout (() => {
      this.isError = false;
    }, 5000)
  }
  //Se elimina un objeto

  deleteUnContacto(id: string) {
    this.contactoService.deleteContacto(id).subscribe(
      res => {
        console.log(res);
        this.getContactos();
        this.router.navigate(['/contacto']);
      },
      err => console.error(err)
    );
  }
    //Se actualiza un objeto

  updateUnContacto() {
    this.contactoService.updateContacto(this.contactos.id_clie, this.contactos).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    );
  }
}
