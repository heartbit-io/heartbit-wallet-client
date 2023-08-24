import React, { useEffect, useState } from 'react';
import { BackHandler, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// assets
import LogoIcon from 'assets/logo/logo.svg';
import HeartBitIcon from 'assets/logo/heartBit.svg';
import AlphaIcon from 'assets/img/alpha.svg';

// components
import {
	Footnote,
	Gradient,
	InputField,
	MainButton,
	Subheadline,
} from 'components';

// utils
import { validateEmail } from 'utils/utility';

// hooks
import { useActivityIndicator } from 'hooks/useActivityIndicator';

type Props = NativeStackScreenProps<RootStackType, 'EmailSignUp'>;

const EmailSignUp = ({ navigation }: Props) => {
	const { toggleActivityIndicator } = useActivityIndicator();
	const [email, setEmail] = useState('');
	const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => {
				BackHandler.exitApp();
				return true;
			},
		);

		return () => backHandler.remove();
	}, []);

	const onPressHandler = async () => {
		toggleActivityIndicator(true);
		auth()
			.sendSignInLinkToEmail(email, {
				android: { packageName: 'com.heartbitwalletclient' },
				handleCodeInApp: true,
				iOS: { bundleId: 'com.heartbit.heartBitWalletClient' },
				url: 'https://heartbit.page.link/ghHK',
				dynamicLinkDomain: 'heartbit.page.link',
			})
			.then(res => {
				AsyncStorage.setItem('email', email);
				navigation.replace('EmailSent', { email });
			})
			.catch(err => console.log(err))
			.finally(() => toggleActivityIndicator(false));
	};

	const onEmailChange = (text: string) => {
		setEmail(text);
		setIsValidEmail(validateEmail(text) ? true : false);
	};

	const navigateToTerms = () => {
		navigation.navigate('WebViewScreen', {
			link: 'https://www.heartbit.io/terms',
		});
	};

	const navigateToPrivacy = () => {
		navigation.navigate('WebViewScreen', {
			link: 'https://www.heartbit.io/privacy',
		});
	};

	return (
		<Gradient>
			<KeyboardAwareScrollView
				enableOnAndroid
				scrollEnabled={false}
				extraScrollHeight={20}
			>
				<Wrapper>
					<Logo source={LogoIcon} />
					<HeartBitWrapper>
						<HeartBit source={HeartBitIcon} />
						<Alpha source={AlphaIcon} />
					</HeartBitWrapper>
					<Description>Your 24/7 doctor friend</Description>
					<InputField
						value={email}
						onChangeText={onEmailChange}
						placeholder="Your email address"
						placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
						textAlign="center"
						keyboardType={'email-address'}
						autoCapitalize={'none'}
					/>
					<MainButton
						text={'Get started'}
						onPress={onPressHandler}
						buttonStyle={{ marginTop: 8 }}
						active={isValidEmail}
					/>
					<StyledFootnote marginTop={32}>
						<Footnote weight="bold">Pro tip </Footnote>
						👉 Creating a new email address that you only use for HeartBit will
						help protect your privacy.
					</StyledFootnote>
					<StyledFootnote marginTop={24}>
						By clicking “Get started” above, you acknowledge that you have read
						and understood, and agree to HeartBit{' '}
						<Footnote color="#FF2D55" onPress={navigateToTerms}>
							Terms of Conditions
						</Footnote>{' '}
						and{' '}
						<Footnote color="#FF2D55" onPress={navigateToPrivacy}>
							Privacy Policy
						</Footnote>
					</StyledFootnote>
				</Wrapper>
			</KeyboardAwareScrollView>
		</Gradient>
	);
};

export default EmailSignUp;

const Wrapper = styled.View`
	flex: 1;
	height: ${Dimensions.get('window').height}px;
	align-items: center;
	justify-content: center;
	padding-horizontal: 25px;
`;

const Logo = styled.Image``;

const HeartBitWrapper = styled.View`
	flex-direction: row;
	align-items: center;
`;

const HeartBit = styled.Image`
	margin-top: 39.73px;
`;

const Alpha = styled.Image`
	position: absolute;
	right: -50px;
`;

const Description = styled(Subheadline)`
	color: #3a3a3c;
	margin-top: 24px;
	margin-bottom: 52px;
`;

const StyledFootnote = styled(Footnote)<{ marginTop: number }>`
	color: #3a3a3c;
	text-align: center;
	margin-top: ${({ marginTop }) => marginTop}px;
	margin-horizontal: 15px;
`;
