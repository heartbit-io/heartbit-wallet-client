import { ScrollView, StyleSheet, View } from 'react-native';
import AnswerChoiceButton from '../../components/forum/AnswerChoiceButton';
import Question from '../../components/forum/Question';
import React, { useState } from 'react';
import GPT4Answer from '../../components/forum/GPT4Answer';
import DoctorAnswerList from '../../components/forum/DoctorAnswerList';
import { SafeAreaView } from 'react-native-safe-area-context';

function Forum({ navigation }: { navigation: any }) {
	const [isEmpty, setIsEmpty] = useState(true);
	return (
		<SafeAreaView style={styles.containerOrange}>
			<ScrollView style={styles.containerWhite}>
				<View style={styles.columnContainerOrange}>
					<Question />
				</View>
				<View style={styles.columnContainer}>
					<GPT4Answer />
				</View>
				<View style={styles.columnListContainer}>
					<DoctorAnswerList isEmpty={isEmpty} setIsEmpty={setIsEmpty} />
				</View>
			</ScrollView>
			{isEmpty ? (
				<></>
			) : (
				<View style={styles.columnContainerNoBorder}>
					<AnswerChoiceButton navigation={navigation} />
				</View>
			)}
		</SafeAreaView>
	);
}

export default Forum;

const styles = StyleSheet.create({
	containerOrange: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
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
		flex: 0.1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: '4%',
	},
	rowContainer: {
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
