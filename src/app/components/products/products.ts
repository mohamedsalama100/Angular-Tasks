import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../service/services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  loading = false;
  private productsSvc = inject(ProductsService);

  async ngOnInit() {
    this.loading = true;
    try {
      this.products = await this.productsSvc.getAllProducts();
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
}