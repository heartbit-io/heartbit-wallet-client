import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import LogoNoBackground from '../assets/LogoNoBackground';
import React from 'react';
import { scale, verticalScale } from '../styles/responsive-size';

function LogoText() {
	return (
		<Image
			style={styles.textLogo}
			source={require('../assets/img/ic_text_logo.png')}
			resizeMode="stretch"
		/>
	);
}

export default LogoText;

const styles = StyleSheet.create({
	textLogo: {
		width: scale(190),
		height: verticalScale(40),
	},
});
