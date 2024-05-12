import { Component } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-basics';
  products: IProduct[] = [];
  loading = false
  constructor(private productService: ProductsService) {
    
  }

  ngOnInit() {
    this.loading = true
    this.productService.getProducts().subscribe((products) => {
      this.products = products
      this.loading = false
    })
  }
}
