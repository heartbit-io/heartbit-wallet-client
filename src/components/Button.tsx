import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { scale, verticalScale } from '../styles/responsive-size';

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
		width: scale(358),
		height: verticalScale(50),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F68F2A',
		borderRadius: scale(14),
	},
	text: {
		color: 'white',
		fontSize: scale(17),
		lineHeight: verticalScale(22),
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subText: {
		color: 'white',
		fontSize: scale(11),
		lineHeight: verticalScale(13),
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
