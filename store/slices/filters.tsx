import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../index';

export interface iFiltersState {
    type: string;
}

// Initial state
const initialState: iFiltersState = {
    type: 'movie'
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFiltersTypeState(state, action) {
            state.type = action.payload;
        }
    }
});

export const { setFiltersTypeState } = filtersSlice.actions;

export const selectFiltersState = (state: AppState) => state.filters;

export default filtersSlice;
