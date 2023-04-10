import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function AskSubmitButton({
	navigation,
	question,
}: {
	navigation: any;
	question: string;
}) {
	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					console.log(question);
					navigation.navigate('Bounty');
				}}
			>
				<Text style={styles.whiteText}>Next</Text>
			</TouchableOpacity>
		</>
	);
}

export default AskSubmitButton;

const styles = StyleSheet.create({
	button: {
		marginTop: '20%',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F68F2A',
		borderRadius: 14,
		marginLeft: '3%',
		marginRight: '3%',
	},
	whiteText: {
		color: 'white',
		fontSize: 18,
		padding: 5,
	},
});
