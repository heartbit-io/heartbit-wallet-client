import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import AskContent from '../../components/home/AskContent';
import GPT4 from '../../components/forum/GPT4';
import Question from '../../components/forum/Question';
import Doctor from '../../components/forum/Doctor';
import BestAnswer from '../../components/forum/BestAnswer';

function Forum({ navigation }: { navigation: any }) {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.columnContainerTop}>
				<Question />
			</View>
			<View style={styles.columnContainer}>
				<GPT4 />
			</View>
			<View style={styles.columnContainer}>
				<Doctor />
			</View>
			<BestAnswer navigation={navigation} />
		</ScrollView>
	);
}

export default Forum;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
	columnContainerTop: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#BDBDBD',
		borderTopWidth: 0.5,
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#BDBDBD',
		borderTopWidth: 0.5,
		borderBottomWidth: 0.5,
		backgroundColor: 'white',
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
