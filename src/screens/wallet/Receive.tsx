import { Button, SafeAreaView, Text, StyleSheet, View } from 'react-native';

import React from 'react';
import { BtcReceive } from '../../components/bitcoin/BtcReceive';

function Receive({ navigation }: { navigation: any }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<View style={styles.contentArea}>
					<BtcReceive />
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Receive;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
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
});
