import {
	Image,
	ScrollView,
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
		<ScrollView style={styles.container}>
			<LinearGradient colors={['#F58A25', '#FFF5ED']} style={styles.gradient}>
				<View style={styles.columnContainer}>
					<View style={styles.contentArea}>
						<Image
							style={styles.logo}
							source={{
								uri: LogoNoBackground,
							}}
						/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.balanceText}> 1,000 sats</Text>
						<Text style={styles.txText}>sent to x5c3ad !</Text>
					</View>
					<DismissButton navigation={navigation} />
				</View>
			</LinearGradient>
		</ScrollView>
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
	contentArea: {
		flex: 1,
		paddingTop: '20%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gradient: {
		width: '100%',
		height: '70%',
	},
	textContainer: {
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
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
