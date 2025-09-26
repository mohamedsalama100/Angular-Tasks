import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../service/services/products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: []
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private svc = inject(ProductsService);
  product: any;
  loading = false;

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loading = true;
      try {
        this.product = await this.svc.getProductById(id);
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    }
  }
}

