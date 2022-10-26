import { Component, OnInit } from '@angular/core';
import { BARCOS } from '../mock-barcos';
import { Barcos } from '../barcos';

@Component({
  selector: 'app-lista-barcos',
  templateUrl: './lista-barcos.component.html',
  styleUrls: ['./lista-barcos.component.css']
})
export class ListaBarcosComponent implements OnInit {
barcos = BARCOS;
selectedBarco?:Barcos;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(barco: Barcos): void {
    this.selectedBarco = barco;

}
}
