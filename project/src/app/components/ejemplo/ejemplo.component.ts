import { Component, OnInit } from '@angular/core';
import {ContactoService} from '../../services/contacto.service';
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
  }

}
