import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function DismissButton({ navigation }: { navigation: any }) {
	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Home')}
			>
				<Text style={styles.whiteText}>Dismiss</Text>
			</TouchableOpacity>
		</>
	);
}

export default DismissButton;

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
