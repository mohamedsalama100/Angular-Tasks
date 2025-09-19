import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../service/services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductsService);

  product?: Iproduct;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductByID(id);   
  }
}
