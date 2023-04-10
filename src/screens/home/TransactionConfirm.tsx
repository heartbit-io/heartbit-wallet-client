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

function TransactionConfirm({ navigation }: { navigation: any }) {
	useEffect(() => {
		StatusBar.setBackgroundColor('#F58A25');
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient colors={['#F58A25', '#FFF5ED']} style={styles.gradient}>
				<View style={styles.columnContainer}>
					<Image
						style={styles.logo}
						source={{
							uri: LogoNoBackground,
						}}
					/>
					<View style={styles.columnContainer}>
						<Text style={styles.balanceText}> 1,000 sats</Text>
						<Text style={styles.txText}>sent to x5c3ad !</Text>
					</View>
				</View>
			</LinearGradient>
			<View style={styles.columnContainerButton}>
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
	logo: {
		marginTop: '25%',
		width: 120,
		height: 120,
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	columnContainerButton: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '30%',
	},
	gradient: {
		width: '100%',
		height: '70%',
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
