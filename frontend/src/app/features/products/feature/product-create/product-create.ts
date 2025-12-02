import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../domain/services/products';
import { Product } from '../../domain/models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-create',
  imports: [RouterLink],
  templateUrl: './product-create.html',
})
export class ProductCreate implements OnInit {
  product: Product | null = null;

  constructor(
    private productsService: ProductsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productsService.getById(Number(id)).subscribe({
        next: (prod) => {
          this.product = prod;
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
