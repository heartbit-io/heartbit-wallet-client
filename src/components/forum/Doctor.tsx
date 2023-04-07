import { View, StyleSheet, Text } from 'react-native';

import React from 'react';

function Doctor() {
	return (
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

export default Doctor;

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
