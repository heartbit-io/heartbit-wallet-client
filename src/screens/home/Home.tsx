import { ScrollView, StyleSheet, View } from 'react-native';

import AskButton from '../../components/home/AskButton';
import Intro from '../../components/home/Intro';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

function Home({ navigation }: { navigation: any }) {
	return (
		<ScrollView style={styles.container}>
			<LinearGradient
  				// start={{x: 0.75=, y: 0.0}} end={{x: 0.5, y: 0.75}}
				colors={['#F58A25', '#FFF5ED']}
				style={styles.gradient}
			>
				<View style={styles.columnContainer}>
					<View style={styles.contentArea}>
						<Intro />
					</View>
					<AskButton navigation={navigation} />
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
		height: '100%',
	},
});
