import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	Platform,
} from 'react-native';
import Logo from '../../../components/Logo';
import LogoText from '../../../components/LogoText';
import LinearGradient from 'react-native-linear-gradient';
import SignUpButton from '../../../components/email/SignUpButton';
import EmailInputBox from '../../../components/email/EmailInputBox';
import {
	scale,
	verticalScale,
	fontSizeScale,
} from '../../../styles/responsive-size';

function EmailSignUp({ navigation }: { navigation: any }) {
	Platform.OS === 'ios'
		? ''
		: useEffect(() => {
				StatusBar.setBackgroundColor('#F58A25');
		  }, []);
	const [email, setEmail] = useState('');
	return (
		<View style={styles.container}>
			<LinearGradient colors={['#F58A25', '#FFF5ED']} style={styles.gradient}>
				<View style={styles.logoContainer}>
					<Logo />
					<LogoText />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						365, 24/7 lightning health consultations by AI and human doctors
					</Text>
				</View>
				<View style={styles.inputContainer}>
					<EmailInputBox email={email} setEmail={setEmail} />
				</View>
				<View style={styles.buttonContainer}>
					<SignUpButton navigation={navigation} />
				</View>
			</LinearGradient>
		</View>
	);
}

export default EmailSignUp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
	logoContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: scale(70),
		right: scale(70),
		top: verticalScale(60),
		position: 'absolute',
	},
	buttonContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: scale(70),
		right: scale(70),
		top: verticalScale(340),
		position: 'absolute',
	},
	inputContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: scale(70),
		right: scale(70),
		top: verticalScale(280),
		position: 'absolute',
	},
	textContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		left: scale(40),
		right: scale(40),
		top: verticalScale(200),
		position: 'absolute',
	},
	gradient: {
		width: '100%',
		height: '70%',
	},
	text: {
		fontSize: fontSizeScale(15),
		textAlign: 'center',
	},
});
