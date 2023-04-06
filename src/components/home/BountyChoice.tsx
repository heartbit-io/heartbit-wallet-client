import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import BountyConfirm from './BountyConfirm';

export function BountyChoice({ navigation }: { navigation: any }) {
	const [bounty, setBounty] = useState(0);
	const bountyHandler = (bounty: number) => {
		setBounty(bounty);
	};
	return (
		<>
			<View style={styles.infoContainer}>
				<Image
					style={styles.infoLogo}
					source={require('../../assets/img/ic_info.png')}
				/>
				<Text style={styles.smallGrayText}>About bounty</Text>
			</View>
			<Text></Text>
			<TouchableOpacity
				style={bounty === 100 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(100);
					console.log(bounty);
				}}
			>
				<View style={styles.bountyItemContainer}>
					<Text style={styles.leftText}>An AI answer guaranteed</Text>
					<View style={styles.flexSpacer} />
					<Text style={styles.rightText}>100 sats</Text>
				</View>
				<Text style={styles.rightTextBottom}>$0.03</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={bounty === 1000 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(1000);
					console.log(bounty);
				}}
			>
				<View style={styles.bountyItemContainer}>
					<Text style={styles.leftText}>May receive less than <Text style={styles.boldText}>1d</Text></Text>
					<View style={styles.flexSpacer} />
					<Text style={styles.rightText}>1,000 sats</Text>
				</View>
				<Text style={styles.rightTextBottom}>$0.28</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={bounty === 10000 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(10000);
					console.log(bounty);
				}}
			>
				<View style={styles.bountyItemContainer}>
					<Text style={styles.leftText}>May receive less than <Text style={styles.boldText}>3h</Text></Text>
					<View style={styles.flexSpacer} />
					<Text style={styles.rightText}>10,000 sats</Text>
				</View>
				<Text style={styles.rightTextBottom}>$2.85</Text>
			</TouchableOpacity>

			<View style={styles.balanceContainer}>
				<Text style={styles.balanceText}>Balance: 2,393,042 sats</Text>
			</View>
			<BountyConfirm navigation={navigation} bounty={bounty} />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	infoContainer: {
		marginTop: '4%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	balanceContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	bountyItemContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoLogo: {
		width: 20,
		height: 20,
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
	leftText: {
		marginTop: 14,
		marginLeft: '3%',
		fontSize: 13,
		marginRight: 'auto',
	},
	rightText: {
		marginRight: '3%',
		fontSize: 17,
		fontWeight: 'bold',
		marginLeft: 'auto',
	},
	rightTextBottom: {
		marginRight: '3%',
		fontSize: 12,
		fontWeight: 'bold',
		marginLeft: 'auto',
		color: '#8E8E93',
	},
	balanceText: {
		fontSize: 15,
		color: '#8E8E93',
		textAlign: 'center',
	},
	flexSpacer: {
	  flex: 1,
	},
	boldText: {
		fontWeight: 'bold',
	},
	smallGrayText: {
		fontSize: 12,
		fontWeight: 'bold',
		color: 'gray',
		marginHorizontal: 8,
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
