import { combineReducers } from '@reduxjs/toolkit';

// slices
import DIDReducer from 'components/did/DIDSlice';

export default combineReducers({
	DID: DIDReducer,
});
