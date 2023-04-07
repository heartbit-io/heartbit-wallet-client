import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function AnswerChoice({ navigation }: { navigation: any }) {
	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate('BestAnswer');
				}}
				title="Best Answer"
			>
				<Text style={styles.whiteText}>Choose the best answer</Text>
				<Text style={styles.whiteSmallText}>1 days 23 hours left</Text>
			</TouchableOpacity>
		</>
	);
}

export default AnswerChoice;

const styles = StyleSheet.create({
	button: {
		flex: 0.1,
		width: '90%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F68F2A',
		padding: '2%',
		marginRight: '2%',
		borderRadius: 14,
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
