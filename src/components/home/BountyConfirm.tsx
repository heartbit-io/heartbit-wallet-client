import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

function BountyConfirm({
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
				title="bounty"
			>
				<Text style={styles.whiteText}>Confirm</Text>
			</TouchableOpacity>
		</>
	);
}

export default BountyConfirm;

const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F68F2A',
		borderRadius: 14,
	},
	whiteText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
