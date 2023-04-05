import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import LogoNoBackground from '../../assets/LogoNoBackground';

function Intro() {
	return (
		<>
			<Image
				style={styles.logo}
				source={{
					uri: LogoNoBackground,
				}}
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
		width: 150,
		height: 150,
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
});
