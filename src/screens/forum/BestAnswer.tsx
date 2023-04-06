import { ScrollView, StyleSheet, View, Text } from 'react-native';
import AnswerChoice from '../../components/forum/AnswerChoice';
import React from 'react';
import AnswerToChoose from '../../components/forum/AnswerToChoose';

function BestAnswer({ navigation }: { navigation: any }) {
	return (
		<ScrollView style={styles.containerWhite}>
			<View style={styles.columnContainerOrange}>
				<Text style={styles.veryBigText}>Choose the best answer</Text>
				<Text style={{ marginTop: '5%' }}>
					<Text style={styles.smallGrayText}>1,000 sats</Text>
					<Text style={styles.smallGrayTextWithOutBold}>
						{' '}
						of bounty will go to the doctor who wrote the answer of your choice.
					</Text>
				</Text>
			</View>
			<View style={styles.columnContainer}>
				<AnswerToChoose />
			</View>
			<AnswerChoice navigation={navigation} />
		</ScrollView>
	);
}

export default BestAnswer;

const styles = StyleSheet.create({
	containerWhite: {
		flex: 1,
		backgroundColor: 'white',
	},
	columnContainerOrange: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingHorizontal: '5%',
		paddingBottom: '5%',
		backgroundColor: '#FFF5ED',
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	veryBigText: {
		fontSize: 34,
		fontWeight: 'bold',
	},
	smallGrayText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: 'gray',
	},
	smallGrayTextWithOutBold: {
		fontSize: 14,
		color: 'gray',
	},
});
