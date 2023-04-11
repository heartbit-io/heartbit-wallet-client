import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function Button({
	onPress,
	text,
	subText,
}: {
	onPress: any;
	text: string;
	subText?: string;
}) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
			{subText === undefined ? (
				<></>
			) : (
				<Text style={styles.subText}>{subText}</Text>
			)}
		</TouchableOpacity>
	);
}

export default Button;

const styles = StyleSheet.create({
	button: {
		flex: 1,
		width: 358,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F68F2A',
		borderRadius: 14,
	},
	text: {
		color: 'white',
		fontSize: 17,
		lineHeight: 22,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subText: {
		color: 'white',
		fontSize: 11,
		lineHeight: 13,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
