import {
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	Platform,
} from 'react-native';
import React, { useEffect } from 'react';

import DismissButton from '../../components/home/DismissButton';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/Logo';
import {
	scale,
	verticalScale,
	fontSizeScale,
} from '../../styles/responsive-size';

function TransactionConfirm({ navigation }: { navigation: any }) {
	Platform.OS === 'ios'
		? ''
		: useEffect(() => {
				StatusBar.setBackgroundColor('#F58A25');
		  }, []);
	return (
		<View style={styles.container}>
			<LinearGradient colors={['#F58A25', '#FFF5ED']} style={styles.gradient}>
				<View style={styles.logoContainer}>
					<Logo />
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.balanceText}> 1,000 sats</Text>
					<Text style={styles.txText}>sent to x5c3ad!</Text>
				</View>
				<View style={styles.buttonContainer}>
					<DismissButton navigation={navigation} />
				</View>
			</LinearGradient>
		</View>
	);
}

export default TransactionConfirm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
	logoContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: scale(70),
		right: scale(70),
		top: verticalScale(110),
		position: 'absolute',
	},
	buttonContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: scale(70),
		right: scale(70),
		top: verticalScale(450),
		position: 'absolute',
	},
	textContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: scale(70),
		right: scale(70),
		top: verticalScale(250),
		position: 'absolute',
	},
	gradient: {
		width: '100%',
		height: '70%',
	},
	text: {
		fontSize: fontSizeScale(15),
		textAlign: 'center',
	},
	balanceText: {
		fontSize: fontSizeScale(28),
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
	},
	txText: {
		fontSize: fontSizeScale(28),
		alignItems: 'center',
		justifyContent: 'center',
	},
});
