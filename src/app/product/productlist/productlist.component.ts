import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  muestraImg:boolean=false;
  listfilter:string='';

  constructor() { }
  muestraImagen(){
    this.muestraImg=!this.muestraImg;

  }
  products:IProducto[]=[
  
    {
      "product1":1,
      "productName":'Sentra',
      "descripcion":'Auto familia 4 puertas',
      'isfilter':'',
      "createDate":'Mayo 21, 2021',
      "price":130000,
      "rating":3.6,
      "ImgUrl": 'https://imgs.search.brave.com/Ly7_A-rK5gnnX0ALO_TCIv3eh9iTXVnqsqGbTqXQto0/rs:fit:1200:1100:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMua2F2YWsuc2Vy/dmljZXMvaW1hZ2Vz/LzI5NDg4L25pc3Nh/bi1zZW50cmEtc2Vu/c2UyMDE5LWZyb250/YWwtbGF0ZXJhbC1w/aWxvdG8tY2VyY2Fu/YS0xNjA3NTA3Mjk2/Mzk4LmpwZw'
    },
    {
      "product1":2,
      "productName":'Ferrari',
      "descripcion":'Auto indivisual 2 puertas',
      'isfilter':'',
      "createDate":'Agosto, 2022',
      "price":1000000,
      "rating":5.5,
      "ImgUrl": 'https://imgs.search.brave.com/CYsUPsr3B5ot7CGxwoMwNMQdZU_3M0P2AC2nOeOHQIc/rs:fit:1200:907:1/g:ce/aHR0cHM6Ly9kMWVp/cDJ6ZGRjMnZkdi5j/bG91ZGZyb250Lm5l/dC9kcGhvdG9zLzEz/NzkyMDQ0LTE2MDUy/NzcyMDQuanBlZw'
    },
    {
      "product1":3,
      "productName":'Lambo',
      "descripcion":'Auto individual 2 puertas',
      'isfilter':'',
      "createDate":'Febrero 22, 2022',
      "price":1300000 ,
      "rating":5.6,
      "ImgUrl": 'https://imgs.search.brave.com/Lrrr3xLyfDJKFNzNj2r88qPVC-Jz8qL1sTljGJIg7ZI/rs:fit:960:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UzL2Mx/Lzk0L2UzYzE5NDRi/YTNmNzE5MmFlM2E2/MWUwMDE2MmQ0ZDk1/LmpwZw'
    },
   
  ]
  ngOnInit(): void {
  }

}
