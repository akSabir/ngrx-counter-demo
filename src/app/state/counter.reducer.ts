import { CounterActions, CounterActionTypes } from './counter.action';

export interface CounterState {
    count: any;
}

export const initialState: CounterState = {
  count: 0
};

export function counterReducer(state = initialState, action: CounterActions) {
  switch (action.type) {
    case CounterActionTypes.Increment:
    return{
      count: state.count + 1
    };

    case CounterActionTypes.Decrement:
      return {
       count: state.count - 1
      };
    default:
      return state;
  }
}
