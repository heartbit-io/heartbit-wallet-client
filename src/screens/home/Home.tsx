import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Logo from '../../../android/app/src/main/assets/custom/Logo';
import React from 'react';
import Intro from '../../components/home/Intro';

function Home({ navigation }: { navigation: any }) {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.columnContainer}>
				<View style={styles.contentArea}>
					<Intro />
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Ask')}
					title="Ask"
				>
					<Text style={styles.whiteText}>Ask doctors anything</Text>
				</TouchableOpacity>
			</View>
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
	button: {
		flex: 1,
		width: '80%',
		height: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 2,
		backgroundColor: '#F68F2A',
		padding: '2%',
		margin: '10%',
		borderRadius: 14,
	},
	whiteText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
