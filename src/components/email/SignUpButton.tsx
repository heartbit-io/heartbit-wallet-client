import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Button from '../Button';
import React from 'react';

function SignUpButton({ navigation }: { navigation: any }) {
	return (
		<Button onPress={() => navigation.replace('Tab')} text={'Get Started'} />
	);
}

export default SignUpButton;
