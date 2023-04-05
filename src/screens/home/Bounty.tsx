import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from 'react-native';

import React, { useState } from 'react';

function Bounty({ navigation }: { navigation: any }) {
	const [bounty, setBounty] = useState('');
	const bountyHandler = (bounty: string) => {
		setBounty(bounty);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.columnContainer}>
				<Text style={styles.veryBigText}>Set a bounty for human answers</Text>
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
		margin: '5%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
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
		fontSize: 28,
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: 'white',
		textAlign: 'left',
		fontSize: 28,
	},
});
