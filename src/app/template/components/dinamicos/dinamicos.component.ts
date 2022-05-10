import { Favorito, Persona } from './../../interfaces/persona.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent{


  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Victor',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      {id:2,nombre:'Ozone'}
    ]
}

  constructor() { }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    //Limpiarmos el campo
    this.nuevoJuego = '';
  }

  guardar() {
    console.log('formulario posteado');
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
