import React, { useState } from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// assets
import logo from 'assets/logo/logo.svg';
import heartBit from 'assets/logo/heartBit.svg';

// components
import { Gradient, InputField, MainButton } from 'components';
import { scale } from 'styles/responsive-size';

type Props = NativeStackScreenProps<WelcomeNavigatorParamList, 'EmailSignUp'>;

const EmailSignUp = ({ navigation }: Props) => {
	const [email, setEmail] = useState('');

	return (
		<Gradient>
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
		</Gradient>
	);
};

export default EmailSignUp;

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	padding-top: ${scale(180)};
`;

const Logo = styled.Image``;

const HeartBit = styled.Image`
	margin-top: ${scale(39.73)};
`;

const Description = styled.Text`
	font-size: 15px;
	color: '#3A3A3C';
	margin-top: ${scale(24)};
	margin-bottom: ${scale(52)};
`;
