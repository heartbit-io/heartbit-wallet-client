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
});
