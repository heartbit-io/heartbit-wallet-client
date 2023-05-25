import { combineReducers } from '@reduxjs/toolkit';

// slices
import DIDReducer from 'components/did/DIDSlice';
import userSlice from './slices/userSlice';
import transactionsSlice from './slices/transactionsSlice';
import questionsSlice from './slices/questionsSlice';

export default combineReducers({
	DID: DIDReducer,
	user: userSlice,
	transactions: transactionsSlice,
	questions: questionsSlice,
});
