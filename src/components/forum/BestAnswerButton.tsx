import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../Button';

function BestAnswerButton({ navigation }: { navigation: any }) {
	return (
		<Button
			onPress={() => navigation.navigate('TransactionConfirm')}
			text={'Choose the best answer'}
		/>
	);
}

export default BestAnswerButton;
