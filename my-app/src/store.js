import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { menuReducer } from './components/Menu/Menu.ducks';

const rootReducer = combineReducers({
    selectedContent: menuReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
