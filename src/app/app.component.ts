import { Component, ChangeDetectionStrategy } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import { Increment, Decrement } from './state/counter.action';
import { AppState } from 'src/app/state/appState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select(state => state.counter.count));
  }

  increment() {
    this.store.dispatch(new Increment);
  }

  decrement() {
    this.store.dispatch(new Decrement);
  }
}
