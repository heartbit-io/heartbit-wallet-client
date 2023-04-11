import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Button from '../Button';
import React from 'react';

function AskButton({ navigation }: { navigation: any }) {
	return (
		<Button
			onPress={() => navigation.navigate('Ask')}
			text={'Ask doctors anything'}
		/>
	);
}

export default AskButton;
