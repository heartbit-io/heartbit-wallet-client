import React, { useState } from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// assets
import logo from 'assets/logo/logo.svg';
import heartBit from 'assets/logo/heartBit.svg';

// components
import { Gradient, InputField, MainButton, Subheadline } from 'components';

// utils
import { validateEmail } from 'utils/utility';

type Props = NativeStackScreenProps<RootStackType, 'EmailSignUp'>;

const EmailSignUp = ({ navigation }: Props) => {
	const [email, setEmail] = useState('');
	const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

	const onPressHandler = async () => {
		auth()
			.sendSignInLinkToEmail(email, {
				android: { packageName: 'com.heartbitwalletclient' },
				handleCodeInApp: true,
				iOS: { bundleId: 'com.heartbit.heartBitWalletClient' },
				url: 'https://heartbit.page.link/ghHK',
			})
			.then(res => {
				AsyncStorage.setItem('email', email);
				navigation.navigate('EmailSent', { email });
			})
			.catch(err => console.log(err));
	};

	const onEmailChange = (text: string) => {
		setEmail(text);
		setIsValidEmail(validateEmail(text) ? true : false);
	};

	return (
		<Gradient>
			<KeyboardAwareScrollView
				enableOnAndroid
				scrollEnabled={false}
				extraScrollHeight={20}
			>
				<Wrapper>
					<Logo source={logo} />
					<HeartBit source={heartBit} />
					<Description>365, 24/7 lightning health consultations</Description>
					<InputField
						value={email}
						onChangeText={onEmailChange}
						placeholder="Your email address"
						placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
						textAlign="center"
						keyboardType={'email-address'}
					/>
					<MainButton
						text={'Get started'}
						onPress={onPressHandler}
						buttonStyle={{ marginTop: 8 }}
						active={isValidEmail}
					/>
				</Wrapper>
			</KeyboardAwareScrollView>
		</Gradient>
	);
};

export default EmailSignUp;

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	padding-top: 180px;
	padding-horizontal: 25px;
`;

const Logo = styled.Image``;

const HeartBit = styled.Image`
	margin-top: 39.73px;
`;

const Description = styled(Subheadline)`
	color: #3a3a3c;
	margin-top: 24px;
	margin-bottom: 52px;
`;
