import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import LogoNoBackground from '../assets/LogoNoBackground';
import React from 'react';

function Logo() {
	return (
		<Image
			style={styles.logo}
			source={{
				uri: LogoNoBackground,
			}}
		/>
	);
}

export default Logo;

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 70,
	},
});
