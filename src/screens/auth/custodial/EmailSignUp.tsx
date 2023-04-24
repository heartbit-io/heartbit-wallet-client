import React, { useState } from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// assets
import logo from 'assets/logo/logo.svg';
import heartBit from 'assets/logo/heartBit.svg';

// components
import { Gradient, InputField, MainButton, Subheadline } from 'components';

type Props = NativeStackScreenProps<WelcomeNavigatorParamList, 'EmailSignUp'>;

const EmailSignUp = ({ navigation }: Props) => {
	const [email, setEmail] = useState('');

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
						onChangeText={setEmail}
						placeholder="Your email address"
						placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
						textAlign="center"
					/>
					<MainButton
						text={'Get started'}
						onPress={() => navigation.replace('Tab')}
						buttonStyle={{ marginTop: 8 }}
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
	color: '#3A3A3C';
	margin-top: 24px;
	margin-bottom: 52px;
`;
