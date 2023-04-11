import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../Button';

function BountyConfirmButton({
	navigation,
	bounty,
}: {
	navigation: any;
	bounty: number;
}) {
	return (
		<Button onPress={() => navigation.navigate('Forum')} text={'Confirm'} />
	);
}

export default BountyConfirmButton;
