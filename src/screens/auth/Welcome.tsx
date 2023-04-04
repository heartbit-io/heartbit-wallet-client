import {
	SafeAreaView,
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
} from 'react-native';
import React from 'react';
import { Mnemonic } from '../../components/mnemonic/Mnemonic';

function Welcome({ navigation }: { navigation: any }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.columnContainer}>
				<Mnemonic navigation={navigation} />
			</View>
		</SafeAreaView>
	);
}

export default Welcome;

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
		width: '80%',
		height: '7.5%',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 10,
	},
	mnemonic: {
		height: '15%',
		width: '80%',
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'white',
	},
	text: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	smallText: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
