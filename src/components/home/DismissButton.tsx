import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../Button';

function DismissButton({ navigation }: { navigation: any }) {
	return (
		<Button onPress={() => navigation.navigate('Home')} text={'Dismiss'} />
	);
}

export default DismissButton;
