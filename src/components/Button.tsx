import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { scale, verticalScale, fontSizeScale } from '../styles/responsive-size';

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
		fontSize: fontSizeScale(17),
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subText: {
		color: 'white',
		fontSize: fontSizeScale(11),
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
