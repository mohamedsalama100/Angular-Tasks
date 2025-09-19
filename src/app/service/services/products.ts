import { Injectable } from '@angular/core';
import { Iproduct } from '../../models/iproduct';

@Injectable({
  providedIn: 'root'  
})
export class ProductsService {
  private products: Iproduct[] = [
    {id:1,name:'TAG Heuer',price:100,quantity:5,img:'images/1.jpg',description:'this is product 1', creditCard:'1234567812345678'},
    {id:2,name:'Longines',price:200,quantity:3,img:'images/6.jpg',description:'this is product 2', creditCard:'8765432187654321'},
    {id:3,name:'Rolex',price:300,quantity:8,img:'images/3.jpg',description:'this is product 3', creditCard:'1111222233334444'},
    {id:4,name:'Omega',price:400,quantity:2,img:'images/4.jpg',description:'this is product 4', creditCard:'4444333322221111'},
    {id:5,name:'Breitling',price:500,quantity:6,img:'images/5.jpg',description:'this is product 5', creditCard:'5555666677778888'},
    {id:6,name:'Cartier',price:600,quantity:4,img:'images/6.jpg',description:'this is product 6', creditCard:'9999000011112222'},
  ];


  getAllProducts(): Iproduct[] {
    return this.products;
  }


  // getProductsByCatID(catID: number): Iproduct[] {
  
  //   return this.products.filter(p => p.id === catID);
  // }


  getProductByID(prodID: number): Iproduct | undefined {
    return this.products.find(p => p.id === prodID);
  }
}

