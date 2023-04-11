import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../Button';

function AskSubmitButton({
	navigation,
	askContent,
}: {
	navigation: any;
	askContent: string;
}) {
	return <Button onPress={() => navigation.navigate('Bounty')} text={'Next'} />;
}

export default AskSubmitButton;
