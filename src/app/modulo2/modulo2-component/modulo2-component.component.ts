import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RepositoryService } from '../../repository.service';

@Component({
  selector: 'app-modulo2-component',
  templateUrl: './modulo2-component.component.html',
  styleUrls: ['./modulo2-component.component.css']
})
export class Modulo2ComponentComponent implements OnInit {

  item: any;

  constructor(private ruta: ActivatedRoute,
    private _service: RepositoryService) {

    this.ruta.params.subscribe(param => {
      this.item = _service.getItem(param['id']);
    })

  }

  ngOnInit() {
  }

}
