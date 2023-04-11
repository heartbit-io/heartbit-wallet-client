import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import LogoNoBackground from '../assets/LogoNoBackground';
import React from 'react';
import { scale, verticalScale } from '../styles/responsive-size';

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
		width: scale(80),
		height: verticalScale(70),
	},
});
