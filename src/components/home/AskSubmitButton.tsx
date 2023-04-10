import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function AskSubmitButton({
	navigation,
	askContent,
}: {
	navigation: any;
	askContent: string;
}) {
	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
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
		flex: 1,
		width: '90%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F68F2A',
		padding: '3%',
		borderRadius: 14,
	},
	whiteText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
