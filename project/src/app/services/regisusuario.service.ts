import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regisusuario } from '../models/Regisusuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisusuarioService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.API_URI}/regisusuario`);
  }
  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/regisusuario/${id}`);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/regisusuario/${id}`);
  }

  saveUsuario(usuario: Regisusuario): Observable <Regisusuario> {
    return this.http.post(`${this.API_URI}/regisusuario`, usuario);
  }

  updateUsuario(id: string|number, updatedUsuario: Regisusuario): Observable<Regisusuario> {
    return this.http.put(`${this.API_URI}/establecimiento/${id}`, updatedUsuario);
  }
}