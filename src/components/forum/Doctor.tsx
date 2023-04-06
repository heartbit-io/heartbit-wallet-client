import { View, StyleSheet, Text } from 'react-native';

import React from 'react';

function Doctor() {
	return (
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
				I have early cataracts. I've been taking MTX steroid 1.5 tablets for 2
				weeks now for arthritis, is it okay to take it? I'm scared because my
				eyes feel like they've gotten worse.
			</Text>
		</View>
	);
}

export default Doctor;

const styles = StyleSheet.create({
	postContainer: {
		flex: 1,
		width: '90%',
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
		fontSize: 20,
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#FFCC00',
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextGreen: {
		color: 'white',
		fontSize: 20,
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#34C759',
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextBlue: {
		color: 'white',
		fontSize: 20,
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#007AFF',
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextIndigo: {
		color: 'white',
		fontSize: 20,
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#5856D6',
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextPurple: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		verticalAlign: 'middle',
		backgroundColor: '#AF52DE',
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	doctorProfileTextRed: {
		color: 'white',
		fontSize: 20,
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#FF3B30',
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
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
