import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../service/services/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-products.html',
  styleUrl: './search-products.css'
})
export class SearchProducts {
query = '';
  results: any[] = [];
  loading = false;

  constructor(private svc: ProductsService) {}

  async search() {
    if (!this.query?.trim()) return;
    this.loading = true;
    try {
      const res = await this.svc.searchProducts(this.query.trim());
      this.results = res?.products || [];
    } catch (e) {
      console.error(e);
      this.results = [];
    } finally {
      this.loading = false;
    }
  }
}
