import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function AskButton({ navigation }: { navigation: any }) {
	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Ask')}
				title="Ask"
			>
				<Text style={styles.whiteText}>Ask doctors anything</Text>
			</TouchableOpacity>
		</>
	);
}

export default AskButton;

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
