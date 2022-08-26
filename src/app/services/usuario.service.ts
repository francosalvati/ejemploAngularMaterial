import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario:"franquito", nombre: "Franco", apellido: "Salvati", sexo:"Masculino"},
    {usuario:"catita", nombre: "Catalina", apellido: "Santiago", sexo: "Femenino"}, 
    {usuario:"marianPR", nombre: "mariana", apellido: "Perez", sexo: "Femenino"}, 
    {usuario:"Flebita", nombre: "Santiago", apellido: "Fleba", sexo: "Masculino"}, 
    {usuario:"tano", nombre: "Stefano", apellido: "Salvati", sexo: "Femenino"}, 
    {usuario:"cholo", nombre: "Andres", apellido: "Ferrari", sexo: "Masculino"}, 
   
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  borrarUsuario(index:number){
    this.listUsuarios.splice(index, 1)
  }

  agregarUsuario(user:Usuario){
    this.listUsuarios.unshift(user);
  }
}
