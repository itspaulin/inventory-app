import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/models/product.model';
import { ProductsService } from '../../domain/services/products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
})
export class ProductCreate implements OnInit {
  product: Product | null = null;

  constructor(
    private productsService: ProductsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.productsService.getById(id).subscribe((prod) => {
        this.product = prod;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
