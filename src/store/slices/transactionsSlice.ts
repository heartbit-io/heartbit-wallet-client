import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from 'apis/transactionsApi';
import { AppThunk } from 'store';

interface TransactionsSlice {
	transactions: TransactionProps[];
	loading: boolean;
	error: string;
	offset: number;
	hasMore: boolean;
	refreshing: boolean;
	fetchingMore: boolean;
}

const initialState: TransactionsSlice = {
	transactions: [],
	loading: false,
	error: '',
	offset: 0,
	hasMore: true,
	refreshing: false,
	fetchingMore: false,
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
		setOffset: (state, action) => ({
			...state,
			offset: action.payload,
		}),
		setHasMore: (state, action) => ({
			...state,
			hasMore: action.payload,
		}),
		setRefreshing: (state, action) => ({
			...state,
			refreshing: action.payload,
		}),
		setFetchingMore: (state, action) => ({
			...state,
			fetchingMore: action.payload,
		}),
		resetTransactions: () => ({
			...initialState,
		}),
	},
});

export const {
	setTransactions,
	setLoading,
	setError,
	setOffset,
	setHasMore,
	setRefreshing,
	setFetchingMore,
	resetTransactions,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;

export const getTransactionsList =
	(refresh = false, fetchingMore = false): AppThunk =>
	async (dispatch, getState) => {
		try {
			const { pubkey } = getState().user.userData;
			let { transactions, offset, loading, refreshing } =
				getState().transactions;
			if (!loading) {
				dispatch(setLoading(true));
				dispatch(setRefreshing(refresh));
				dispatch(setFetchingMore(fetchingMore));
				offset = refresh ? 0 : offset;
				getTransactions(pubkey, 10, offset)
					.then(res => {
						if (res.data) {
							dispatch(setHasMore(res.data.hasMore));
							if (refresh) {
								dispatch(setTransactions(res.data.transactions));
								dispatch(setOffset(res.data.transactions.length));
							} else {
								dispatch(
									setTransactions([...transactions, ...res.data.transactions]),
								);
								dispatch(
									setOffset([...transactions, ...res.data.transactions].length),
								);
							}
						}
					})
					.catch(err => dispatch(setError(err)))
					.finally(() => {
						dispatch(setLoading(false));
						dispatch(setRefreshing(false));
						dispatch(setFetchingMore(false));
					});
			}
		} catch (err) {
			console.log('FETCH TRANSACTIONS LIST ERR:', err);
			dispatch(setError(err));
		}
	};
