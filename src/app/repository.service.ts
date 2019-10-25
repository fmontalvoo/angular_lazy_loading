import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  items: any[] = [
    {
      id: 1,
      nombre: 'Fulano',
      apellido: 'De Tal',
      edad: 25
    },
    {
      id: 2,
      nombre: 'Aquiles',
      apellido: 'Castro',
      edad: 27
    },
    {
      id: 3,
      nombre: 'Aquiles',
      apellido: 'Bailo',
      edad: 41
    }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItem(id) {
    let aux;
    this.items.forEach(item => {
      if (item.id == id)
        aux = item;
    });
    return aux;
  }
}
