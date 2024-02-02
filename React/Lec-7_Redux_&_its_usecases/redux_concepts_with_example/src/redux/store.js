import { configureStore } from '@reduxjs/toolkit'; 
import CounterReducer  from './slice/CounterSlice';
import CounterInputReducer from './slice/CounterInputSlice';
import UserSlice from './slice/UserSlice';

export const store = configureStore(
    {
        reducer: {
            counter: CounterReducer,
            counterInput: CounterInputReducer,
            user: UserSlice.reducer,
        }
    }
)