import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { SingletonService } from 'src/app/services/singleton.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  count: string;
  search: string = '¿Qué estás buscando?';
  public counterObservable!: Observable<number>;
  constructor(private _singletonSerivce: SingletonService) {
    this.count = '0';
  }
  ngOnInit(): void {
    this.getCounterInfo();
  }

  getCounterInfo() {
    this.counterObservable = this._singletonSerivce.getCounterSendManager();
    this.counterObservable.subscribe((res) => {
      this.count = res.toString();
    });
  }
}
