import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Establecimiento} from '../models/Establecimiento';
import { Observable } from 'rxjs';

// Se hace el llamado a las Api del server para realizar el crud y usarlas en la aplicación

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {
  
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEstablecimientos() {
    return this.http.get(`${this.API_URI}/establecimiento`);
  }
  getEstablecimiento(id: string) {
    return this.http.get(`${this.API_URI}/establecimiento/${id}`);
  }

  deleteEstablecimiento(id: string) {
    return this.http.delete(`${this.API_URI}/establecimiento/${id}`);
  }

  saveEstablecimiento(establecimiento: Establecimiento) {
    return this.http.post(`${this.API_URI}/establecimiento`, establecimiento);
  }

  updateEstablecimiento(id: string|number, updatedEstablecimiento: Establecimiento) {
    return this.http.put(`${this.API_URI}/establecimiento/${id}`, updatedEstablecimiento);
  }
}
