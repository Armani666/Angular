import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  numer1:number=0;
  result:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  resul():void{
    for(let i=1; i<=11; ++i){
    this.result[i]=`${this.numer1} x ${i} = ${i*this.numer1}`+"\n";
    }

  }

}
