import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'],
})
export class CinepolisComponent implements OnInit {
  constructor() {}
  nombre:string = '';
  tarjCineco:boolean = false;
  cantBole:number = 0;
  cantCompra:number = 0;
  descu:number = 0;
  preciBole:number = 12;
  total:number = 0;

  ngOnInit(): void {}

  tarjeCineValor(valor: boolean): void {
    this.tarjCineco = valor;
  }

  proceso(): void {
    this.descu = 0;

    if (this.cantBole > 5) {
      this.descu += 15;
    } else if (this.cantBole >= 3 && this.cantBole <= 5) {
      this.descu += 10;
    } else {
      this.descu = 0;
    }

    if (this.tarjCineco) {
      this.descu += 10;
    }

    if (this.cantBole < this.cantCompra * 7) {
      this.total = this.preciBole * this.cantBole;
      if (this.descu != 0) {
        this.descu /= 100;
        this.descu *= this.total;
        this.total -= this.descu;
      }
    } else {
    }
  }
}
