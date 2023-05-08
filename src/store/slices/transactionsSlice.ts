import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from 'apis/transactionsApi';
import { AppThunk } from 'store';

interface TransactionsSlice {
	transactions: any;
	loading: boolean;
	error: string;
}

const initialState: TransactionsSlice = {
	transactions: null,
	loading: false,
	error: '',
};

export const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		setTransactions: (state, action) => ({
			...state,
			transactions: action.payload,
		}),
		setLoading: (state, action) => ({
			...state,
			loading: action.payload,
		}),
		setError: (state, action) => ({
			...state,
			error: action.payload,
		}),
		resetTransactions: () => ({
			...initialState,
		}),
	},
});

export const { setTransactions, setLoading, setError, resetTransactions } =
	transactionsSlice.actions;
export default transactionsSlice.reducer;

export const getTransactionsList =
	(): AppThunk => async (dispatch, getState) => {
		try {
			const { pubkey } = getState().user.userData;
			console.log('>>>>>>>>><<<<<<<', pubkey);
			const res: any = await getTransactions(pubkey);
			console.log('TRANSACTIONS ????????????', res);
			if (res.statusCode === 200 && res?.success) {
				return true;
			} else {
				return false;
			}
		} catch (err) {
			console.log('>>>>>>', err);
			return false;
		}
	};
