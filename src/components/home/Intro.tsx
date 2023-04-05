import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import Logo from '../../../android/app/src/main/assets/custom/Logo';
import React from 'react';

function Intro() {
	return (
		<>
			<Image
				style={styles.logo}
				source={{
					uri: Logo,
				}}
			/>
			<Text style={styles.text}>365, 24/7 health consultations</Text>
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
	},
});
