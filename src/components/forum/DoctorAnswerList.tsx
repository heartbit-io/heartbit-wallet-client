import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';
import HourGlass from '../../assets/HourGlass';
import { scale, verticalScale } from '../../styles/responsive-size';

function DoctorAnswerList({
	isEmpty,
	setIsEmpty,
}: {
	isEmpty: boolean;
	setIsEmpty: Function;
}) {
	return isEmpty ? (
		<TouchableOpacity
			style={styles.imgContainer}
			onPress={() => {
				setIsEmpty(false);
			}}
		>
			<Image
				style={styles.logo}
				source={{
					uri: HourGlass,
				}}
			/>
			<Text style={styles.bigGrayText}>2 days and 23 hours left</Text>
			<Text style={styles.bigGrayTextWithoutBold}>
				for receiving answers from human doctors
			</Text>
		</TouchableOpacity>
	) : (
		<>
			<View style={styles.container}>
				<View style={styles.postContainer}>
					<View style={styles.rowContainer}>
						<Text style={styles.doctorProfileTextIndigo}>A</Text>
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
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.postContainer}>
					<View style={styles.rowContainer}>
						<Text style={styles.doctorProfileTextRed}>A</Text>
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
				</View>
			</View>
		</>
	);
}

export default DoctorAnswerList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		borderColor: '#BDBDBD',
		borderTopWidth: 1,
		paddingVertical: '4%',
	},
	imgContainer: {
		flex: 1,
		width: '100%',
		borderColor: '#BDBDBD',
		borderTopWidth: 1,
		paddingVertical: '4%',
		justifyContent: 'center',
		alignItems: 'center',
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
	doctorProfileTextYellow: {
		color: 'white',
		fontSize: scale(20),
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#FFCC00',
		width: scale(40),
		height: verticalScale(40),
		borderRadius: scale(20),
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextGreen: {
		color: 'white',
		fontSize: scale(20),
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#34C759',
		width: scale(40),
		height: verticalScale(40),
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextBlue: {
		color: 'white',
		fontSize: scale(20),
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#007AFF',
		width: scale(40),
		height: verticalScale(40),
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextIndigo: {
		color: 'white',
		fontSize: scale(20),
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#5856D6',
		width: scale(40),
		height: verticalScale(40),
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextPurple: {
		color: 'white',
		fontSize: scale(20),
		fontWeight: 'bold',
		verticalAlign: 'middle',
		backgroundColor: '#AF52DE',
		width: scale(40),
		height: verticalScale(40),
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextRed: {
		color: 'white',
		fontSize: scale(20),
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#FF3B30',
		width: scale(40),
		height: verticalScale(40),
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: scale(14),
		fontWeight: 'bold',
	},
	smallText: {
		fontSize: scale(10),
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: scale(18),
		fontWeight: 'bold',
		paddingLeft: '4%',
	},
	bigTextWithoutBold: {
		fontSize: scale(18),
		paddingTop: '4%',
	},
	smallGrayText: {
		fontSize: scale(12),
		fontWeight: 'bold',
		color: 'gray',
		paddingLeft: '4%',
	},
	bigGrayText: {
		fontSize: scale(18),
		fontWeight: 'bold',
		color: 'gray',
	},
	bigGrayTextWithoutBold: {
		fontSize: scale(18),
		color: 'gray',
	},
	logo: {
		width: scale(120),
		height: verticalScale(120),
	},
});
