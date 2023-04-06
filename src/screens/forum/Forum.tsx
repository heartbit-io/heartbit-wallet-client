import { ScrollView, StyleSheet, View } from 'react-native';
import AnswerChoice from '../../components/forum/AnswerChoice';
import Doctor from '../../components/forum/Doctor';
import GPT4 from '../../components/forum/GPT4';
import Question from '../../components/forum/Question';
import React from 'react';

function Forum({ navigation }: { navigation: any }) {
	return (
		<ScrollView style={styles.containerWhite}>
			<View style={styles.columnContainerOrange}>
				<Question />
			</View>
			<View style={styles.columnContainer}>
				<GPT4 />
			</View>
			<View style={styles.columnContainer}>
				<Doctor />
			</View>
			<AnswerChoice navigation={navigation} />
		</ScrollView>
	);
}

export default Forum;

const styles = StyleSheet.create({
	containerWhite: {
		flex: 1,
		backgroundColor: 'white',
	},
	columnContainerOrange: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#BDBDBD',
		borderTopWidth: 1,
		paddingVertical: '4%',
		paddingHorizontal: '2%',
		backgroundColor: '#FFF5ED',
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#BDBDBD',
		borderTopWidth: 1,
		paddingVertical: '4%',
		paddingHorizontal: '2%',
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
