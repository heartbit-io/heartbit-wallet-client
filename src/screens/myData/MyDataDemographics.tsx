import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function MyDataDemographics({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const demographics = route.params.demographics;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Demographics',
    });
  });
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.rowContainer}>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>Birthdate</Text>
          <Text style={styles.value}>{demographics?.birthDate ?? 'None'}</Text>
        </View>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>Race</Text>
          <Text style={styles.value}>{demographics?.race ?? 'None'}</Text>
        </View>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>Occupation</Text>
          <Text style={styles.value}>{demographics?.occupation ?? 'None'}</Text>
        </View>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>Education</Text>
          <Text style={styles.value}>{demographics?.education ?? 'None'}</Text>
        </View>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>Marital status</Text>
          <Text style={styles.value}>
            {demographics?.maritalStatus ?? 'None'}
          </Text>
        </View>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>Employment status</Text>
          <Text style={styles.value}>
            {demographics?.employmentStatus ?? 'None'}
          </Text>
        </View>
        <View style={[styles.row, styles.rowBottomLine]}>
          <Text style={styles.key}>Height</Text>
          <Text style={styles.value}>{demographics?.height ?? 'None'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.key}>Weight</Text>
          <Text style={styles.value}>{demographics?.weight ?? 'None'}</Text>
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

export default MyDataDemographics;
