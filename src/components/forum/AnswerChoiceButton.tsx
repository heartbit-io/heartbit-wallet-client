import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../Button';

function AnswerChoiceButton({ navigation }: { navigation: any }) {
	return (
		<Button
			onPress={() => navigation.navigate('BestAnswer')}
			text={'Choose the best answer'}
			subText={'1 days 23 hours left'}
		/>
	);
}

export default AnswerChoiceButton;
