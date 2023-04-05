import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import LogoNoBackground from '../../assets/LogoNoBackground';
import React from 'react';

function Intro() {
	return (
		<>
			<Image
				style={styles.logo}
				source={{
					uri: LogoNoBackground,
				}}
			/>
			<Image
				style={styles.textLogo}
				source={require('../../assets/img/ic_text_logo.png')}
				resizeMode="stretch"
			/>
			<Text style={styles.text}>365, 24/7 lightning health consultations</Text>
			<Text style={styles.text}>by AI and human doctors</Text>
		</>
	);
}

export default Intro;

const styles = StyleSheet.create({
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 120,
		height: 120,
	},
	text: {
		fontSize: 15,
	},
	smallText: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	textLogo: {
		width: 190,
		height: 42,
		marginTop: 20,
		marginBottom: 40,
	}
});
