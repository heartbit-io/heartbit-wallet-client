import React, {useEffect, useState} from 'react';
import TabNavigator from './navigators/TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WalletNavigator from './navigators/WalletNavigator';
import LogIn from './screens/wallet/LogIn';
import LogInNavigator from './navigators/LogInNavigator';

function RootApp(): JSX.Element {

  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const checkMnemonic = async () => {
      await AsyncStorage.clear();
      const mnemonicState = await AsyncStorage.getItem("vault");
      mnemonicState === null ?
      setIsUser(false) : setIsUser(true);
    }
    checkMnemonic();
  })

  return isUser? <LogInNavigator /> : <WalletNavigator />

}

export default RootApp;
