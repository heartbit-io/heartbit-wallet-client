import {
	TouchableOpacity,
	SafeAreaView,
	Text,
	View,
	StyleSheet,
} from 'react-native';

import React from 'react';
import { BtcBalance } from '../../components/bitcoin/BtcBalance';

function Wallet({ navigation }: { navigation: any }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<View style={styles.contentArea}>
					<BtcBalance />
				</View>
			</View>
			<View style={styles.rowContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Receive')}
					title="Receive"
				>
					<Text style={styles.bigText}>Receive</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Send')}
					title="Send"
				>
					<Text style={styles.bigText}>Send</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

export default Wallet;

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
	button: {
		flex: 0.3,
		height: '30%',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 10,
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
