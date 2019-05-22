import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Regis_usuario} from '../models/Regis_usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisUsuarioService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.API_URI}/regis_usuario`);
  }
  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/regis_usuario/${id}`);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/regis_usuario/${id}`);
  }

  saveUsuario(usuario: Regis_usuario) {
    return this.http.post(`${this.API_URI}/regis_usuario`, usuario);
  }

  updateUsuario(id: string|number, updatedUsuario: Regis_usuario) {
    return this.http.put(`${this.API_URI}/regis_usuario/${id}`, updatedUsuario);
  }
}
