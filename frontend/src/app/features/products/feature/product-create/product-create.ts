import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../domain/services/products';

@Component({
  selector: 'app-product-create',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './product-create.html',
})
export class ProductCreate implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {}

  productForm: FormGroup | null = null;

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      price: ['', [Validators.required, Validators.min(0.01)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      category: [''],
      sku: [''],
    });
  }

  onSubmit() {
    if (this.productForm?.valid) {
      console.log('valid');

      const product = this.productForm.value;

      this.productService.create(product).subscribe({
        next: (res) => console.log('Created product', res),
        error: (err) => console.error('Erro ao criar produto', err),
        complete: () => this.router.navigate(['/products']),
      });
    } else {
      console.log('Form inválido');
      this.productForm?.markAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}
