import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SingletonService } from 'src/app/services/singleton.service';

@Component({
  selector: 'slide-products',
  templateUrl: './slide-products.component.html',
  styleUrls: ['./slide-products.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideProductsComponent implements OnInit {
  products: Product[];
  responsiveOptions: any;
  counter: string;
  public counterObservable!: Observable<number>;
  constructor(
    private _productService: ProductService,
    private _singletonSerivce: SingletonService
  ) {
    this.counter = "0";
    this.products = [];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this._productService
      .fetchProducts()
      .subscribe((response) => (this.products = response));
    this.getCounterInfo();
  }

  getCounterInfo() {
    this.counterObservable = this._singletonSerivce.getCounterSendManager();
    this.counterObservable.subscribe(res => this.counter = res.toString());
  }

  sendInfo() {
    this._singletonSerivce.setCounterSendManager(1);
    this.getCounterInfo();
  }
}
