import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

export default class CounterBloc {
  constructor() {
    this._subject = new Subject();
  }

  get counter() {
    return this._subject.pipe(scan((count, v) => count + v, 0));
  }

  increase() {
    this._subject.next(1);
  }

  decrease() {
    this._subject.next(-1);
  }

  dispose() {
    this._subject.complete();
  }
}