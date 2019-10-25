import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/repository.service';

@Component({
  selector: 'app-modulo1-component',
  templateUrl: './modulo1-component.component.html',
  styleUrls: ['./modulo1-component.component.css']
})
export class Modulo1ComponentComponent implements OnInit {

  items: any[];

  constructor(_service: RepositoryService) {
    this.items = _service.getItems();
  }

  ngOnInit() {
  }

}
