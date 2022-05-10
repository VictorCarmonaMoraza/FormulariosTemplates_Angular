import { Persona } from './../../interfaces/persona.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent{

  persona: Persona = {
    nombre: 'Victor',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      {id:2,nombre:'Ozone'}
    ]
}

  constructor() { }

  guardar() {
    console.log('formulario posteado');
  }

}
