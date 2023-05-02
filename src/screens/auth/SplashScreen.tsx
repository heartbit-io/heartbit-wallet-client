import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// hooks
import { useAuth, useFirebaseLink } from 'hooks';

// assets
import logo from 'assets/logo/logo.svg';
import heartBit from 'assets/logo/heartBit.svg';

// components
import { Gradient } from 'components';

type Props = NativeStackScreenProps<RootStackType, 'SplashScreen'>;

const SplashScreen = ({ navigation }: Props) => {
	const { authStatus } = useAuth();
	const { signInStatus } = useFirebaseLink();

	useEffect(() => {
		if (authStatus === 'authorized' || signInStatus === 'signedIn') {
			navigation.navigate('BottomTabs');
		} else if (
			authStatus === 'unauthorized' &&
			signInStatus === 'notSignedIn'
		) {
			navigation.navigate('EmailSignUp');
		}
	}, [authStatus, signInStatus]);

	return (
		<Gradient>
			<Wrapper>
				<Logo source={logo} />
				<HeartBit source={heartBit} />
			</Wrapper>
		</Gradient>
	);
};

export default SplashScreen;

const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.Image``;

const HeartBit = styled.Image`
	margin-top: 39.73px;
`;
