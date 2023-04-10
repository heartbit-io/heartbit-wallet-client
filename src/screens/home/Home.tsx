import React, { useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import AskButton from '../../components/home/AskButton';
import Intro from '../../components/home/Intro';
import LinearGradient from 'react-native-linear-gradient';

function Home({ navigation }: { navigation: any }) {
	useEffect(() => {
		StatusBar.setBackgroundColor('#F58A25');
	}, []);
	return (
		<ScrollView style={styles.container}>
			<LinearGradient colors={['#F58A25', '#FFF5ED']} style={styles.gradient}>
				<View style={styles.columnContainer}>
					<View style={styles.contentArea}>
						<Intro />
					</View>
					<AskButton navigation={navigation} />
				</View>
				<View style={styles.recentQuestionContainer}>
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
				</View>
			</LinearGradient>
		</ScrollView>
	);
}

export default Home;

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
		fontSize: 28,
		fontWeight: 'bold',
		marginLeft: 16,
		color: '#8E8E93',
		marginBottom: 10,
		marginRight: 'auto',
	},
	recentHeaderRightText: {
		fontSize: 17,
		marginRight: 16,
		color: '#8E8E93',
		marginBottom: 10,
		marginLeft: 'auto',
	},
	recentQuestion: {
		marginLeft: 16,
		marginTop: 5,
		marginBottom: 5,
	},
	line: {
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		paddingTop: 13,
	},
	recentQuestionTopText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	recentHeaderMiddleText: {
		fontSize: 15,
		color: '#8E8E93',
		marginTop: 5,
		marginBottom: 5,
	},
	recentHeaderBottomText_blue: {
		fontSize: 15,
		color: '#007AFF',
	},
	recentHeaderBottomText_red: {
		fontSize: 15,
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
		fontSize: 16,
		fontWeight: 'bold',
		marginHorizontal: 8,
	},
});
