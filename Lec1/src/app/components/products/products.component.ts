import { Component } from '@angular/core';
import { Store } from '../../models/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  store: Store;
  clientName: string;

  constructor() {
    this.store = new Store(
      'Gama Store',
      ['Mansoura', 'Cairo', 'Alex'],
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d77ac359949097.5a357be8594ab.jpg'
    );

    this.clientName = 'Nada Malash'
  }
}
