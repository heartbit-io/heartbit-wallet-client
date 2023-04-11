import { View, StyleSheet, Text } from 'react-native';

import React from 'react';
import { scale, verticalScale } from '../../styles/responsive-size';

function Question() {
	return (
		<View style={styles.container}>
			<View style={styles.postContainer}>
				<View style={styles.rowContainer}>
					<Text style={styles.userProfileText}>Q</Text>
					<View style={styles.columnContainer}>
						<Text style={styles.bigText}>You</Text>
						<Text style={styles.smallGrayText}>23 Mar 2023 ・ 1000 sats</Text>
					</View>
				</View>
				<Text style={styles.bigTextWithoutBold}>
					I have early cataracts. I've been taking MTX steroid 1.5 tablets for 2
					weeks now for arthritis, is it okay to take it? I'm scared because my
					eyes feel like they've gotten worse.
				</Text>
			</View>
		</View>
	);
}

export default Question;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
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
	userProfileText: {
		color: 'white',
		fontSize: scale(26),
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#5AC8FA',
		width: scale(40),
		height: verticalScale(40),
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
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
});
