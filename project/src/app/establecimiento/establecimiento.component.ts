import { Component, OnInit, HostBinding } from '@angular/core';
import { EstablecimientoService } from '../services/establecimiento.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Establecimiento } from '../models/Establecimiento';
import { Validators, NgForm } from '@angular/forms';

/* Componente establecimiento, en este ts se realizan los métodos correspondientes para
el crud de registro de usuarios así mismo como el llamado al modelo como serán guardado
los datos.
*/

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.scss']
})
export class EstablecimientoComponent implements OnInit {

  establecimientos: Establecimiento = {
    id_est: 0,
    tip_clie: 'Supermercado',
    nom_est: '',
    cal_est: 0,
    dir_est: '',
    auto_mail: 0,
    auto_tele: 0,
    id_clie: 0,
    act_est: 0,
    est_clie: 0
  };


  pageActual: number = 1;
  establecimiento: any = [];
  edit: boolean = false;
  public isError = false;

  constructor(private establecimientoService: EstablecimientoService,private router: Router,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    this.getEstablecimientos();
    if (params.id_est) {
      this.establecimientoService.getEstablecimiento(params.id_est).subscribe(
       res => {
         console.log(res);
         this.establecimientos = res;
         this.edit = true;
       },
       err => console.error(err)
      );
    }
  }
  getEstablecimientos() {
    this.establecimientoService.getEstablecimientos().subscribe(
      res => {
        console.log()
        this.establecimiento = res;
        console.log(res);
      },
      err => console.log(err)
    );
   }

  saveNuevoEstablecimiento(form: NgForm) {
    if (form.valid) {
      console.log('entro');
      //   delete this.game.id;
          this.establecimientoService.saveEstablecimiento(this.establecimientos).subscribe(
            res => {
              console.log('entro 2');
              console.log(res);
              this.router.navigate(['/']);
              this.isError = false;
            },
            err => {
              this.onIsError();
            }
          )} else {
            this.onIsError();
          }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout (() => {
      this.isError = false;
    }, 3000)
  }

  updateUnEstablecimiento() {
    this.establecimientoService.updateEstablecimiento(this.establecimientos.id_est, this.establecimientos).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    );
  }

  deleteUnEstablecimiento(id: string){
    this.establecimientoService.deleteEstablecimiento(id).subscribe(
      res => {
        console.log(res);
        this.getEstablecimientos();
        this.router.navigate(['/establecimiento']);
      },
      err => console.error(err)
    );

    }
}

