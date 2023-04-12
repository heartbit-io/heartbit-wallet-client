import { View, StyleSheet, Text } from 'react-native';

import React from 'react';
import {
	scale,
	verticalScale,
	fontSizeScale,
} from '../../styles/responsive-size';

function RecentQuestionList() {
	return (
		<>
			<View style={styles.recentHeaderContainer}>
				<Text style={styles.recentHeaderLeftText}>Recent</Text>
				<Text style={styles.recentHeaderRightText}>See all {'>'}</Text>
			</View>
			{/* FIXME(david): Just For demo */}
			<View style={styles.recentQuestion}>
				<Text style={styles.recentQuestionTopText}>Mild migraine</Text>
				<Text style={styles.recentHeaderMiddleText}>
					2 mins ago, No answer 1,000 sats
				</Text>
				<Text style={styles.recentHeaderBottomText_blue}>
					Collecting answers: 2 days 23 hours left
				</Text>
				<View style={styles.line} />
			</View>
			<View style={styles.recentQuestion}>
				<Text style={styles.recentQuestionTopText}>
					Cataracts and MTX steroids
				</Text>
				<Text style={styles.recentHeaderMiddleText}>
					13 Mar 2023, 2 answers 10,000 sats
				</Text>
				<Text style={styles.recentHeaderBottomText_red}>
					Select an answer within 1 day 1 hour {'>'}{' '}
				</Text>
				<View style={styles.line} />
			</View>
			<View style={styles.recentQuestion}>
				<Text style={styles.recentQuestionTopText}>Stomachache</Text>
				<Text style={styles.recentHeaderMiddleText}>
					2 mins ago, No answer 1,000 sats
				</Text>
				<Text style={styles.recentHeaderBottomText_blue}>
					Collecting answers: 2 days 23 hours left
				</Text>
				<View style={styles.line} />
			</View>
		</>
	);
}

export default RecentQuestionList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	recentQuestionContainer: {
		flex: 1,
	},
	recentHeaderContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	recentHeaderLeftText: {
		fontSize: fontSizeScale(28),
		fontWeight: 'bold',
		marginLeft: scale(16),
		color: '#8E8E93',
		marginBottom: verticalScale(10),
		marginRight: 'auto',
	},
	recentHeaderRightText: {
		fontSize: fontSizeScale(17),
		marginRight: scale(16),
		color: '#8E8E93',
		marginBottom: verticalScale(10),
		marginLeft: 'auto',
	},
	recentQuestion: {
		marginHorizontal: scale(16),
		marginVertical: verticalScale(5),
	},
	line: {
		borderBottomWidth: scale(1),
		borderBottomColor: '#ddd',
		paddingTop: verticalScale(13),
	},
	recentQuestionTopText: {
		fontSize: fontSizeScale(20),
		fontWeight: 'bold',
	},
	recentHeaderMiddleText: {
		fontSize: fontSizeScale(15),
		color: '#8E8E93',
		marginTop: verticalScale(5),
		marginBottom: verticalScale(5),
	},
	recentHeaderBottomText_blue: {
		fontSize: fontSizeScale(15),
		color: '#007AFF',
	},
	recentHeaderBottomText_red: {
		fontSize: fontSizeScale(15),
		color: '#FF2D55',
	},
	rowContainer: {
		flex: 0.3,
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
	gradient: {
		width: '100%',
		height: '50%',
	},
	text: {
		fontSize: fontSizeScale(16),
		fontWeight: 'bold',
		marginHorizontal: scale(8),
	},
});
