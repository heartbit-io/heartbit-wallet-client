import {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';

import React from 'react';
import { BtcSend } from '../../components/bitcoin/BtcSend';

function Send({ navigation }: { navigation: any }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<KeyboardAvoidingView
					behavior={Platform.select({ ios: 'padding', android: undefined })}
					style={styles.contentArea}
				>
					<BtcSend />
				</KeyboardAvoidingView>
			</View>
		</SafeAreaView>
	);
}

export default Send;

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
});
