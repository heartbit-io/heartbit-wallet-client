import React, { useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import AskButton from '../../components/home/AskButton';
import LinearGradient from 'react-native-linear-gradient';
import RecentQuestionList from '../../components/home/RecentQuestionList';
import Logo from '../../components/Logo';
import LogoText from '../../components/LogoText';
import { scale } from '../../styles/responsive-size';

function Home({ navigation }: { navigation: any }) {
	useEffect(() => {
		StatusBar.setBackgroundColor('#F58A25');
	}, []);
	return (
		<ScrollView style={styles.container}>
			<LinearGradient colors={['#F58A25', '#FFF5ED']} style={styles.gradient}>
				<View style={styles.columnContainer}>
					<View style={styles.contentArea}>
						<Logo />
						<LogoText />
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<AskButton navigation={navigation} />
				</View>
				<View style={styles.recentQuestionContainer}>
					<RecentQuestionList />
				</View>
			</LinearGradient>
		</ScrollView>
	);
}

export default Home;

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
	buttonContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: '10%',
	},
	recentQuestionContainer: {
		flex: 1,
		flexDirection: 'column',
	},
	rowContainer: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contentArea: {
		flex: 1,
		paddingTop: '20%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gradient: {
		width: '100%',
		height: '50%',
	},
	text: {
		fontSize: scale(16),
		fontWeight: 'bold',
		marginHorizontal: scale(8),
	},
});
