import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  total:number=0;
  numero1:any=0;
  numero2:any=0;
  opcion:string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

  cambiaopcion(opcion1:string){
    this.opcion = opcion1;
  
  }

  operacion(){
    if(this.opcion=='suma') {
      this.total=parseInt(this.numero1) * parseInt (this.numero2);
    } else if ( this.opcion=='resta'){
      this.total= parseInt(this.numero1) - parseInt(this.numero2) ;
    } else if (this.opcion=='multiplicacion'){
      this.total= parseInt(this.numero1) * parseInt(this.numero2) ;
    }else if (this.opcion=='divicion'){
     this.total=parseInt(this.numero1) / parseInt(this.numero2) ;

    }else{
      alert('Escoge uno PADRINOOOOOOO')
    }
  

  }
}

