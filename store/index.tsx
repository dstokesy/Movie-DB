import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';
import filtersSlice from './slices/filters';
import { createWrapper } from 'next-redux-wrapper';

const persistConfig = {
    key: 'root',
    storage: session,
    whitelist: ['filters']
};

const rootReducer = combineReducers({
    filters: filtersSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST']
            }
        }),
    devTools: true
});

const makeStore = () => store;

export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
