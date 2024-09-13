export interface IProduct {
  name: string;
  description?: string;
  price: number;
  img: string;
}

export class Product implements IProduct {
  public name: string;
  public description?: string;
  public price: number;
  public img: string;

  constructor(p: IProduct) {
    this.name = p.name || 'Product Title';
    this.description = p.description || 'Product Description ....';
    this.price = p.price ?? 0;
    this.img = p.img || 'https://via.placeholder.com/150';
  }
}
