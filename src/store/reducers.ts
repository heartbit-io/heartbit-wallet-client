import { combineReducers } from '@reduxjs/toolkit';

// slices
import DIDReducer from 'components/did/DIDSlice';
import userSlice from './slices/userSlice';

export default combineReducers({
	DID: DIDReducer,
	user: userSlice,
});
