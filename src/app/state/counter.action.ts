import { Action } from '@ngrx/store';

export enum CounterActionTypes {
    Increment = '[Counter Page] Increment',
    Decrement = '[Counter Page] Decrement'
}

export class Increment implements Action {
    readonly type = CounterActionTypes.Increment;
}


export class Decrement implements Action {
    readonly type = CounterActionTypes.Decrement;
}

export type CounterActions = Increment | Decrement;
