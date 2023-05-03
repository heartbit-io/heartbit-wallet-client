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
import {
	Gradient,
	InputField,
	MainButton,
	Subheadline,
	Title2,
} from 'components';

const EmailSent = () => {
	return (
		<Gradient>
			<Wrapper>
				<Logo source={logo} />
				<Title weight="bold">Check your email inbox</Title>
				<Container>
					<Subheadline>We have sent an email to:</Subheadline>
					<Subheadline weight="bold">ds@heartbit.io</Subheadline>
				</Container>
			</Wrapper>
		</Gradient>
	);
};

export default EmailSent;

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	padding-top: 180px;
	padding-horizontal: 25px;
`;

const Logo = styled.Image``;

const Title = styled(Title2)`
	color: #3a3a3c;
	margin-top: 55px;
	margin-bottom: 23px;
`;

const Container = styled.View`
	align-items: center;
`;
