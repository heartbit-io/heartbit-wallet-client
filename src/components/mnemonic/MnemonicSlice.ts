/*

scope for v2

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../stores/store';

import * as hippocrat from '../../utils/hippocrat';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const generateMnemonic = createAsyncThunk(
	'mnemonicGenerator',
	async () => {
		const mnemonic = await hippocrat.BtcWallet.generateWalletMnemonic();
		// The value we return becomes the `fulfilled` action payload
		return mnemonic;
	},
);

export interface mnemonicState {
	value: string;
	status: 'idle' | 'loading' | 'failed';
}

const initialState: mnemonicState = {
	value: '',
	status: 'idle',
};

export const MnemonicSlice = createSlice({
	name: 'mnemomnic',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setMnemonic: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	extraReducers: builder => {
		builder
			.addCase(generateMnemonic.pending, state => {
				state.status = 'loading';
			})
			.addCase(generateMnemonic.fulfilled, (state, action) => {
				state.status = 'idle';
				state.value = action.payload;
			})
			.addCase(generateMnemonic.rejected, state => {
				state.status = 'failed';
			});
	},
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMnemonic = (state: RootState) => state.mnemonic.value;

export default MnemonicSlice.reducer;
*/
