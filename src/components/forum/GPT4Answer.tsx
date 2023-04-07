import { View, StyleSheet, Text } from 'react-native';

import React from 'react';

function GPT4Answer() {
	return (
		<View style={styles.container}>
			<View style={styles.postContainer}>
				<View style={styles.rowContainer}>
					<Text style={styles.gptProfileText}>A</Text>
					<View style={styles.columnContainer}>
						<Text style={styles.bigText}>GPT-4</Text>
						<Text style={styles.smallGrayText}>Open AI ・ 23 Mar 2023</Text>
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

export default GPT4Answer;

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
	gptProfileText: {
		color: 'white',
		fontSize: 20,
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#189B70',
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
