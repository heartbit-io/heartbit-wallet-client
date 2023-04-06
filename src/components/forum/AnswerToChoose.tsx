import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';

function AnswerToChoose() {
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
						<Text
							style={
								bestAnswer === 1 ? styles.chosenProfile : styles.emptyProfile
							}
						>
							₿
						</Text>
						<View style={styles.columnContainer}>
							<Text style={styles.bigText}>x5c3ad</Text>
							<Text style={styles.smallGrayText}>
								General physician ・ 24 Mar 2023
							</Text>
						</View>
					</View>
					<Text style={styles.bigTextWithoutBold}>
						I have early cataracts. I've been taking MTX steroid 1.5 tablets for
						2 weeks now for arthritis, is it okay to take it? I'm scared because
						my eyes feel like they've gotten worse.
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
						<Text
							style={
								bestAnswer === 2 ? styles.chosenProfile : styles.emptyProfile
							}
						>
							₿
						</Text>
						<View style={styles.columnContainer}>
							<Text style={styles.bigText}>x5c3ad</Text>
							<Text style={styles.smallGrayText}>
								General physician ・ 24 Mar 2023
							</Text>
						</View>
					</View>
					<Text style={styles.bigTextWithoutBold}>
						I have early cataracts. I've been taking MTX steroid 1.5 tablets for
						2 weeks now for arthritis, is it okay to take it? I'm scared because
						my eyes feel like they've gotten worse.
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

export default AnswerToChoose;

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
		fontSize: 28,
		fontWeight: 'bold',
		borderColor: '#BDBDBD',
		borderWidth: 1,
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	chosenProfile: {
		color: 'white',
		fontSize: 28,
		fontWeight: 'bold',
		borderColor: '#F68F2A' /*#FF2D55'*/,
		borderWidth: 1,
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F68F2A',
		transform: [{ rotate: '15deg' }],
	},
	text: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	smallText: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingLeft: '4%',
	},
	bigTextWithoutBold: {
		fontSize: 18,
		paddingTop: '4%',
	},
	smallGrayText: {
		fontSize: 12,
		fontWeight: 'bold',
		color: 'gray',
		paddingLeft: '4%',
	},
});
