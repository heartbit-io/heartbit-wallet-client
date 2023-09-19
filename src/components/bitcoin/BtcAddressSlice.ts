/*

scope for v2

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

export interface btcAddressState {
	value: string;
	status: 'idle' | 'loading' | 'failed';
}

const initialState: btcAddressState = {
	value: '',
	status: 'idle',
};

export const BtcAddressSlice = createSlice({
	name: 'btcAddress',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setBtcAddress: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBtcAddress = (state: RootState) => state.btcAddress.value;

export default BtcAddressSlice.reducer;
*/
