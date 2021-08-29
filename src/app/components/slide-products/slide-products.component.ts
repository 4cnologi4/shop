import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'slide-products',
  templateUrl: './slide-products.component.html',
  styleUrls: ['./slide-products.component.css']
})
export class SlideProductsComponent implements OnInit {

  products: Product[];
  responsiveOptions: any;
  constructor(private _productService: ProductService) { 
    this.products = [];
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this._productService.fetchProducts()
    .subscribe(response => this.products = response);
  }

}
