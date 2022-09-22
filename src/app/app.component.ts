import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  pelicula={
    titulo :'Spiderman',
    fechalanzamiento : new Date (),
    precio:80.43,
  }

 duplicarValor (X: number): number{
   return X*2;

 }

}
