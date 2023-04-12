import { ScrollView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import AnswerChoiceList from '../../components/forum/AnswerChoiceList';
import BestAnswerButton from '../../components/forum/BestAnswerButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontSizeScale } from '../../styles/responsive-size';

function BestAnswer({ navigation }: { navigation: any }) {
	return (
		<SafeAreaView style={styles.containerOrange}>
			<ScrollView style={styles.containerWhite}>
				<View style={styles.columnContainerOrange}>
					<Text style={styles.veryBigText}>Choose the best answer</Text>
					<Text style={{ marginTop: '5%' }}>
						<Text style={styles.smallGrayText}>1,000 sats</Text>
						<Text style={styles.smallGrayTextWithOutBold}>
							{' '}
							of bounty will go to the doctor who wrote the answer of your
							choice.
						</Text>
					</Text>
				</View>
				<View style={styles.columnContainer}>
					<AnswerChoiceList />
				</View>
			</ScrollView>
			<View style={styles.columnContainerNoBorder}>
				<BestAnswerButton navigation={navigation} />
			</View>
		</SafeAreaView>
	);
}

export default BestAnswer;

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
	columnContainerNoBorder: {
		flex: 0.1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: '4%',
	},
	veryBigText: {
		fontSize: fontSizeScale(34),
		fontWeight: 'bold',
	},
	smallGrayText: {
		fontSize: fontSizeScale(14),
		fontWeight: 'bold',
		color: 'gray',
	},
	smallGrayTextWithOutBold: {
		fontSize: fontSizeScale(14),
		color: 'gray',
	},
});
