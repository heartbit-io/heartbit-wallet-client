import {
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React, { useEffect } from 'react';

import DismissButton from '../../components/home/DismissButton';
import LinearGradient from 'react-native-linear-gradient';
import LogoNoBackground from '../../assets/LogoNoBackground';
import Logo from '../../components/Logo';

function TransactionConfirm({ navigation }: { navigation: any }) {
	useEffect(() => {
		StatusBar.setBackgroundColor('#F58A25');
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient colors={['#F58A25', '#FFF5ED']} style={styles.gradient}>
				<View style={styles.logoContainer}>
					<Logo />
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.balanceText}> 1,000 sats</Text>
					<Text style={styles.txText}>sent to x5c3ad !</Text>
				</View>
			</LinearGradient>
			<View style={styles.buttonContainer}>
				<DismissButton navigation={navigation} />
			</View>
		</SafeAreaView>
	);
}

export default TransactionConfirm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
	logoContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		left: '17.02%',
		right: '16.87%',
		top: '22.02%',
		bottom: '18.1%',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: 25,
		top: 480,
		position: 'absolute',
	},
	textContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		left: 75,
		top: 330,
		width: 257,
		height: 40,
	},
	gradient: {
		width: '100%',
		height: '70%',
	},
	text: {
		fontSize: 15,
		lineHeight: 20,
		textAlign: 'center',
	},
	balanceText: {
		fontSize: 28,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
	},
	txText: {
		fontSize: 28,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
