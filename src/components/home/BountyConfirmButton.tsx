import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function BountyConfirmButton({
	navigation,
	bounty,
}: {
	navigation: any;
	bounty: number;
}) {
	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					console.log(bounty);
					navigation.navigate('Forum');
				}}
			>
				<Text style={styles.whiteText}>Confirm</Text>
			</TouchableOpacity>
		</>
	);
}

export default BountyConfirmButton;

const styles = StyleSheet.create({
	button: {
		width: '100%',
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
