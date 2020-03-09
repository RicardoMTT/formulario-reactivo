import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  public stars:any[];
  constructor() {
    this.stars = [
      {
        name:"Ricardo",
        apellido:"Tovar",
        universidad:"San marcos"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      },
      {
        name:"Josue",
        apellido:"Estrada",
        universidad:"UNI"
      }
    ]
   }

   public getStars(){
     return this.stars;
   }
}
