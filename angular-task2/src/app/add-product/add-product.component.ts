import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct, Product } from '../model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<IProduct>();
  public product: IProduct = {
    name: '',
    price: 0,
    img: '',
  };
  // ------------------------------------------------------------------------------------------------------------------------------------
  onAddProduct() {
    this.productAdded.emit(new Product(this.product));
  }
}
