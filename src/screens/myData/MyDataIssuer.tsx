import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function MyDataIssuer({navigation, route}: {navigation: any; route: any}) {
  const {issuer} = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'issuer',
    });
  });
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.rowContainer}>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>Name</Text>
          <Text style={styles.value}>{issuer?.name ?? 'None'}</Text>
        </View>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>DID</Text>
          <Text numberOfLines={1} ellipsizeMode="middle" style={styles.value}>
            {issuer?.did ?? 'None'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.key}>Verified</Text>
          <Text style={styles.value}>{issuer?.isVerified ? 'Yes' : 'No'}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  rowContainer: {
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    height: 'auto',
    flex: 1,
  },
  row: {
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBottomLine: {
    borderBottomColor: '#e9ecef',
    borderBottomWidth: 1,
  },
  key: {
    flex: 1,
  },
  value: {
    textAlign: 'right',
    color: '#828282',
    flex: 2,
  },
});

export default MyDataIssuer;
