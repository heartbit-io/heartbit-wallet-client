import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import BountyConfirm from './BountyConfirm';

export function BountyChoice({ navigation }: { navigation: any }) {
	const [bounty, setBounty] = useState(0);
	const bountyHandler = (bounty: number) => {
		setBounty(bounty);
	};
	return (
		<>
			<Text style={styles.smallGrayText}>ℹ️ About bounty</Text>
			<Text></Text>
			<TouchableOpacity
				style={bounty === 100 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(100);
					console.log(bounty);
				}}
			>
				<Text style={styles.text}>An AI answer guaranteed : 100 sats</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={bounty === 1000 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(1000);
					console.log(bounty);
				}}
			>
				<Text style={styles.text}>May receive less than 1d : 1,000 sats</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={bounty === 10000 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(10000);
					console.log(bounty);
				}}
			>
				<Text style={styles.text}>May receive less than 3h : 10,000 sats</Text>
			</TouchableOpacity>
			<BountyConfirm navigation={navigation} bounty={bounty} />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	rowContainer: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contentArea: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		marginTop: '4%',
		width: '100%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'gray',
		backgroundColor: 'white',
		borderWidth: 2,
		borderRadius: 10,
	},
	buttonSelected: {
		marginTop: '4%',
		width: '100%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'red',
		backgroundColor: 'white',
		borderWidth: 2,
		borderRadius: 10,
	},
	text: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	smallGrayText: {
		marginTop: '4%',
		fontSize: 12,
		fontWeight: 'bold',
		color: 'gray',
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	logo: {
		width: 15,
		height: 15,
	},
});
