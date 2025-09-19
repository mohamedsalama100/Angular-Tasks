import { Component, inject, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import {  FormsModule } from '@angular/forms';
import { CardShadow } from "../../directives/card-shadow";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CreditCardPipe } from "../../pipe/credit-card-pipe";
import { ProductDetail } from '../product-detail/product-detail';
import { ProductsService } from '../../service/services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CardShadow, CurrencyPipe, DatePipe, CreditCardPipe ,ProductDetail , CardShadow,RouterLink ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  currentDate: Date = new Date();

 
  products: Iproduct[] = [];
  filteredProducts: Iproduct[] = [];

  searchTerm: string = '';
  selectedProduct?: Iproduct;


  private productService = inject(ProductsService);

  ngOnInit(): void {

    this.products = this.productService.getAllProducts();
    this.filteredProducts = [...this.products];
  }

  searchByName() {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(term)
      );
    }
  }

  addToCart(p: Iproduct) {
    if (p.quantity == 1) {
      p.quantity--;
    } else {
      p.quantity = p.quantity - 2;
    }
  }

  // toggleDetails(p: Iproduct) {
  //   if (this.selectedProduct && this.selectedProduct.id === p.id) {
  //     this.selectedProduct = undefined; // close
  //   } else {
  //     this.selectedProduct = p; // open
  //   }
  // }

  // onCloseDetails() {
  //   this.selectedProduct = undefined;
  // }
}