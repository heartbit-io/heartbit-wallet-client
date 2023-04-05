import { ScrollView, StyleSheet, Text } from 'react-native';

import AskContent from '../../components/home/AskContent';
import React from 'react';

function Ask({ navigation }: { navigation: any }) {
	return (
		<ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
			<Text style={styles.veryBigText}>What do you want to ask?</Text>
			<AskContent navigation={navigation} />
		</ScrollView>
	);
}

export default Ask;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
	columnContainer: {
		flex: 1,
		margin: '5%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	rowContainer: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contentArea: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	veryBigText: {
		fontSize: 34,
		fontWeight: 'bold',
		marginLeft: '3%',
	},
	input: {
		backgroundColor: '#FFF5ED',
		textAlign: 'left',
		fontSize: 28,
	},
});
