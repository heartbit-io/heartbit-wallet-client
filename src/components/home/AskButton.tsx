import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function AskButton({ navigation }: { navigation: any }) {
	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Ask')}
			>
				<Text style={styles.whiteText}>Ask doctors anything</Text>
			</TouchableOpacity>
		</>
	);
}

export default AskButton;

const styles = StyleSheet.create({
	button: {
		flex: 1,
		width: '90%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F68F2A',
		padding: '3%',
		marginVertical: '10%',
		borderRadius: 14,
	},
	whiteText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
