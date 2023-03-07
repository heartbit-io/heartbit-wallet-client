import {SafeAreaView, TouchableOpacity, Text, View, StyleSheet} from 'react-native';

import {Mnemonic} from '../../components/mnemonic/Mnemonic';
import React from 'react';

function Welcome({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <Mnemonic navigation = {navigation} />
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
