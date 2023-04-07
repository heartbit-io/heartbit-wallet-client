import { ScrollView, StyleSheet, View } from 'react-native';
import AnswerChoiceButton from '../../components/forum/AnswerChoiceButton';
import Question from '../../components/forum/Question';
import React from 'react';
import GPT4Answer from '../../components/forum/GPT4Answer';
import DoctorAnswerList from '../../components/forum/DoctorAnswerList';

function Forum({ navigation }: { navigation: any }) {
	return (
		<ScrollView style={styles.containerWhite}>
			<View style={styles.columnContainerOrange}>
				<Question />
			</View>
			<View style={styles.columnContainer}>
				<GPT4Answer />
			</View>
			<View style={styles.columnListContainer}>
				<DoctorAnswerList />
			</View>
			<View style={styles.columnContainerNoBorder}>
				<AnswerChoiceButton navigation={navigation} />
			</View>
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
	},
	columnListContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	columnContainerNoBorder: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: '4%',
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
