import {
	configureStore,
	ThunkAction,
	Action,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';

import rootReducer from './reducers';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
