import { Component, OnInit, HostBinding } from '@angular/core';
import { ContactoService } from '../services/contacto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Contacto } from '../models/Contacto';
import { Validators } from '@angular/forms';


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
  pageActual: number = 1;
  contacto: any = [];
  edit: boolean = false;
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

  getContactos() {
    this.contactoService.getContactos().subscribe(
      res => {
        this.contacto = res;
        console.log(res);
      },
      err => console.log(err)
    );
   }

  saveNuevoContacto() {
    console.log('entro');
//   delete this.game.id;
    this.contactoService.saveContacto(this.contactos).subscribe(
      res => {
        console.log('entro 2');
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }

  deleteUnContacto(id: string) {
    this.contactoService.deleteContacto(id).subscribe(
      res => {
        console.log(res);
        this.getContactos();
        this.router.navigate(['/']);
      },
      err => console.error(err)
    );
  }

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
