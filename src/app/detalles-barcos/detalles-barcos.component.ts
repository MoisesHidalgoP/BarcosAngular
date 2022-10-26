import { Component, Input, OnInit } from '@angular/core';
import { Barcos } from '../barcos';
import { BARCOS } from '../mock-barcos';


@Component({
  selector: 'app-detalles-barcos',
  templateUrl: './detalles-barcos.component.html',
  styleUrls: ['./detalles-barcos.component.css'],
  
})
export class DetallesBarcosComponent implements OnInit {
  @Input() barco?: Barcos;
  constructor() { }

  ngOnInit(): void {
  }

}
