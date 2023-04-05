import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function AskSubmit({
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
				title="Bounty"
			>
				<Text style={styles.whiteText}>Next</Text>
			</TouchableOpacity>
		</>
	);
}

export default AskSubmit;

const styles = StyleSheet.create({
	button: {
		flex: 0.1,
		width: '85%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F68F2A',
		padding: '2%',
		margin: '10%',
		borderRadius: 14,
	},
	whiteText: {
		color: 'white',
		fontSize: 18,
		padding: 5,
	},
});
