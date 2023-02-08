import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Badge} from '@rneui/themed';
import {DATAProps} from '../../utils/types';
import React from 'react';
import {fatchMyDataList} from '../../apis/myDataAPI';

const Item = ({dataInfo}: {dataInfo: DATAProps}) => (
  // TODO(hyunsub): isNew status update after clicked
  <View style={styles.item}>
    {dataInfo?.isNew ? <Badge badgeStyle={styles.isNew} /> : null}
    <Text style={styles.title}>{dataInfo?.title ?? 'None'}</Text>
    <Text style={styles.issuer}>{dataInfo?.issuer ?? 'None'}</Text>
    <Text style={styles.issuedAt}>Issued at</Text>
    <Text style={styles.issuedAt}>{dataInfo?.issuedAt ?? 'None'}</Text>
    <Text style={styles.dataCnt}>
      {dataInfo?.dataCnt ?? 0} {'data >'}
    </Text>
  </View>
);

function MyData({navigation}: {navigation: any}) {
  return (
    <FlatList
      data={fatchMyDataList()}
      style={styles.container}
      renderItem={data => {
        const dataInfo: DATAProps = data?.item;

        return (
          <Pressable
            onPress={() => {
              navigation.navigate('MyDataDetail', {
                dataInfo,
              });
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#f8f9fa' : 'white', // TODO(hyunsub): common style
              },
              styles.wrapperCustom,
            ]}>
            <View>
              <Item dataInfo={dataInfo} />
            </View>
          </Pressable>
        );
      }}
      keyExtractor={data => data.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 20,
    marginLeft: 20,
    marginRight: 20,
  },
  item: {
    borderRadius: 10,
    padding: 30,
  },
  wrapperCustom: {
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoUrl: {
    fontSize: 11,
  },
  issuer: {
    fontSize: 11,
    marginTop: 10,
    marginBottom: 15,
  },
  issuedAt: {
    fontSize: 11,
  },
  dataCnt: {
    fontSize: 11,
    color: 'blue',
    textAlign: 'right',
  },
  isNew: {
    backgroundColor: '#ff7f00',
    marginLeft: 'auto',
    justifyContent: 'flex-end',
  },
});

export default MyData;
