import {
	Action,
	ThunkAction,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';

import MnemonicReducer from '../components/mnemonic/MnemonicSlice';
import BtcAddressReducer from '../components/bitcoin/BtcAddressSlice';
import DIDReducer from '../components/did/DIDSlice';

export const store = configureStore({
	reducer: {
		mnemonic: MnemonicReducer,
		btcAddress: BtcAddressReducer,
		DID: DIDReducer,
	},
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
