import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';
import HourGlass from '../../assets/HourGlass';
import {
	scale,
	verticalScale,
	fontSizeScale,
} from '../../styles/responsive-size';

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
						<View style={styles.doctorProfileIndigo}>
							<Text style={styles.doctorProfileText}>A</Text>
						</View>
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
	doctorProfileText: {
		color: 'white',
		fontSize: fontSizeScale(26),
		fontWeight: 'bold',
	},
	doctorProfileYellow: {
		verticalAlign: 'middle',
		backgroundColor: '#FFCC00',
		width: scale(40),
		height: scale(40),
		borderRadius: scale(20),
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileGreen: {
		verticalAlign: 'middle',
		backgroundColor: '#34C759',
		width: scale(40),
		height: scale(40),
		borderRadius: scale(20),
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileBlue: {
		verticalAlign: 'middle',
		backgroundColor: '#007AFF',
		width: scale(40),
		height: scale(40),
		borderRadius: scale(20),
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileIndigo: {
		verticalAlign: 'middle',
		backgroundColor: '#5856D6',
		width: scale(40),
		height: scale(40),
		borderRadius: scale(20),
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfilePurple: {
		verticalAlign: 'middle',
		backgroundColor: '#AF52DE',
		width: scale(40),
		height: scale(40),
		borderRadius: scale(20),
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileRed: {
		verticalAlign: 'middle',
		backgroundColor: '#FF3B30',
		width: scale(40),
		height: scale(40),
		borderRadius: scale(20),
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
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
	bigGrayText: {
		fontSize: fontSizeScale(18),
		fontWeight: 'bold',
		color: 'gray',
	},
	bigGrayTextWithoutBold: {
		fontSize: fontSizeScale(18),
		color: 'gray',
	},
	logo: {
		width: scale(120),
		height: verticalScale(120),
	},
});
