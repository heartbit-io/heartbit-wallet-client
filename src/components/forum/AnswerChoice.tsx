import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function AnswerChoice({ navigation }: { navigation: any }) {
	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate('Forum');
				}}
				title="Forum"
			>
				<Text style={styles.whiteText}>Choose the best answer</Text>
				<Text style={styles.whiteSmallText}>2 days 23 hours left</Text>
			</TouchableOpacity>
		</>
	);
}

export default AnswerChoice;

const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 2,
		backgroundColor: '#F68F2A',
		borderRadius: 14,
		position: 'relative',
	},
	whiteText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	whiteSmallText: {
		color: 'white',
		fontSize: 12,
		fontWeight: 'bold',
	},
});
