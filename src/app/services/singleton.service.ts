import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingletonService {
  public counter = 0;
  public persistCounter: any;
  private counterSendManager: Subject<number> = new Subject<number>();
  constructor() {}

  public getCounterSendManager() {
    this.persistCounter = localStorage.getItem("persistCounter");
    if (this.persistCounter !== null)
        this.counter = Number.parseInt(this.persistCounter);
    this.counterSendManager.next(this.counter);
    return this.counterSendManager.asObservable();
  }

  public setCounterSendManager(counter: number): void {
    this.counter = this.counter + counter;
    localStorage.setItem("persistCounter", this.counter.toString());
    this.counterSendManager.next(this.counter);
  }
}
