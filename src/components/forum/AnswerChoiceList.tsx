import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import React, { useState } from 'react';
import { scale, fontSizeScale } from '../../styles/responsive-size';
import Bitcoin from '../../assets/Bitcoin';

function AnswerChoiceList() {
	const [bestAnswer, setBestAnswer] = useState(0);
	const bestAnswerHandler = (bestAnswer: number) => {
		setBestAnswer(bestAnswer);
	};
	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.postContainer}
					onPress={() => {
						setBestAnswer(1);
						console.log(1);
					}}
				>
					<View style={styles.rowContainer}>
						{bestAnswer === 1 ? (
							<Image
								style={styles.chosenProfile}
								source={{
									uri: Bitcoin,
								}}
							/>
						) : (
							<Text style={styles.emptyProfile}></Text>
						)}
						<View style={styles.columnContainer}>
							<Text style={styles.bigText}>x5c3ad</Text>
							<Text style={styles.smallGrayText}>
								General physician ・ 24 Mar 2023
							</Text>
						</View>
					</View>
					<Text style={styles.bigTextWithoutBold}>
						Methotrexate (MTX) is a common medication used to treat rheumatoid
						arthritis and other inflammatory conditions. While it can help
						control inflammation, it's not typically associated with cataract
						development. If you feel that your eyes have gotten worse, it's
						important to consult with an ophthalmologist or your primary care
						doctor. They can assess your situation and provide appropriate
						advice based on your medical history and current medications.
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.postContainer}
					onPress={() => {
						setBestAnswer(2);
						console.log(2);
					}}
				>
					<View style={styles.rowContainer}>
						{bestAnswer === 2 ? (
							<Image
								style={styles.chosenProfile}
								source={{
									uri: Bitcoin,
								}}
							/>
						) : (
							<Text style={styles.emptyProfile}></Text>
						)}
						<View style={styles.columnContainer}>
							<Text style={styles.bigText}>kf30afc</Text>
							<Text style={styles.smallGrayText}>
								General physician ・ 24 Mar 2023
							</Text>
						</View>
					</View>
					<Text style={styles.bigTextWithoutBold}>
						In general, some alternative treatments for arthritis include
						nonsteroidal anti-inflammatory drugs (NSAIDs), physical therapy, and
						lifestyle changes like exercise and weight management. However, it's
						crucial to talk to your doctor before making any changes to your
						treatment plan, as they can assess the risks and benefits of each
						option for your specific situation. Regarding cataracts, the
						progression can vary from person to person, and factors like age,
						genetics, and lifestyle may contribute to their development. It's
						important to have regular eye exams, especially if you have a family
						history of cataracts or other eye conditions.
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

export default AnswerChoiceList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		borderColor: '#BDBDBD',
		borderTopWidth: 1,
		paddingVertical: '4%',
	},
	postContainer: {
		flex: 1,
		paddingHorizontal: '5%',
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	rowContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	emptyProfile: {
		color: 'white',
		verticalAlign: 'middle',
		fontWeight: 'bold',
		borderColor: '#BDBDBD',
		borderWidth: 1,
		width: scale(40),
		height: scale(40),
		borderRadius: scale(20),
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	chosenProfile: {
		width: scale(40),
		height: scale(40),
	},
	text: {
		fontSize: fontSizeScale(14),
		fontWeight: 'bold',
	},
	smallText: {
		fontSize: fontSizeScale(10),
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: fontSizeScale(18),
		fontWeight: 'bold',
		paddingLeft: '4%',
	},
	bigTextWithoutBold: {
		fontSize: fontSizeScale(18),
		paddingTop: '4%',
	},
	smallGrayText: {
		fontSize: fontSizeScale(12),
		fontWeight: 'bold',
		color: 'gray',
		paddingLeft: '4%',
	},
});
