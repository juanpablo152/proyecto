import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contacto} from '../models/contacto';
import { Observable } from 'rxjs';

// Se hace el llamado a las Api del server para realizar el crud y usarlas en la aplicación

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getContactos() {
    return this.http.get(`${this.API_URI}/contacto`);
  }
  getContacto(id: string) {
    return this.http.get(`${this.API_URI}/contacto/${id}`);
  }

  deleteContacto(id: string) {
    return this.http.delete(`${this.API_URI}/contacto/${id}`);
  }

  saveContacto(contacto: Contacto) {
    return this.http.post(`${this.API_URI}/contacto`, contacto);
  }

  updateContacto(id: string|number, updatedContacto: Contacto) {
    return this.http.put(`${this.API_URI}/contacto/${id}`, updatedContacto);
  }
}
