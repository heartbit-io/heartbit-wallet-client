import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { BountyChoiceList } from '../../components/home/BountyChoiceList';
import BountyConfirmButton from '../../components/home/BountyConfirmButton';

function Bounty({ navigation }: { navigation: any }) {
	const [bounty, setBounty] = useState(0);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.columnContainer}>
				<Text style={styles.veryBigText}>Set a bounty for human answers</Text>
				<BountyChoiceList bounty={bounty} setBounty={setBounty} />
			</View>
			<View style={styles.buttonContainer}>
				<BountyConfirmButton navigation={navigation} bounty={bounty} />
			</View>
		</SafeAreaView>
	);
}

export default Bounty;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
	columnContainer: {
		flex: 1,
		marginHorizontal: '5%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	buttonContainer: {
		flex: 0.1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: '5%',
	},
	rowContainer: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contentArea: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	veryBigText: {
		fontSize: 34,
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: 'white',
		textAlign: 'left',
		fontSize: 28,
	},
});
