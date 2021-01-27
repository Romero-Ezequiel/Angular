import { Component, OnInit } from '@angular/core';
import {Ejercicio} from '../ejercicio';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  //AGREGO UNA PROPIEDAD PARA REPRESENTAR ESTA PROPIEDAD EN HTML SE TIENE QUE UTILIZAR LAS LLAVES
  //PERO PARA UTILIZARLO TENGO QUE USAR EL COMPONENTE DE app.component.ts
  //ejercicio = "Flexiones";

  //Aca cree un Objeto de tipo Ejercicio
  ejercicio: Ejercicio={
    id:1,
    name:"Atributo name del obejto"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
