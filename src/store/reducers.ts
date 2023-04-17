import { combineReducers } from '@reduxjs/toolkit';

// slices
import MnemonicReducer from '../components/mnemonic/MnemonicSlice';
import BtcAddressReducer from '../components/bitcoin/BtcAddressSlice';
import DIDReducer from '../components/did/DIDSlice';

export default combineReducers({
	mnemonic: MnemonicReducer,
	btcAddress: BtcAddressReducer,
	DID: DIDReducer,
});
