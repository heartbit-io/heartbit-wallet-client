import { ScrollView, View, StyleSheet } from 'react-native';
import React from 'react';
import Intro from '../../components/home/Intro';
import AskButton from '../../components/home/AskButton';

function Home({ navigation }: { navigation: any }) {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.columnContainer}>
				<View style={styles.contentArea}>
					<Intro />
				</View>
				<AskButton navigation={navigation} />
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
});
