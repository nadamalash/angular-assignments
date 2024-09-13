import { Component } from '@angular/core';
import { DUMMY_PRODUCTS } from './api/products';
import { IProduct } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public products = DUMMY_PRODUCTS;

  public onAddProduct(product: IProduct): void {
    this.products.push(product);
  }
}
