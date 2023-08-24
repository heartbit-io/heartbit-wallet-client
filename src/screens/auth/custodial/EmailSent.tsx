import React, { useCallback } from 'react';
import { ActivityIndicator, BackHandler } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { useAuth, useFirebaseLink } from 'hooks';
import { useFocusEffect } from '@react-navigation/native';

// assets
import logo from 'assets/logo/logo.svg';

// components
import { Footnote, Gradient, Subheadline, Title2 } from 'components';

type Props = NativeStackScreenProps<RootStackType, 'EmailSent'>;

const EmailSent = ({ route }: Props) => {
	const email = route?.params?.email;
	const { authStatus } = useAuth();
	const { signInStatus } = useFirebaseLink();

	useFocusEffect(
		useCallback(() => {
			const backHandler = BackHandler.addEventListener(
				'hardwareBackPress',
				() => {
					BackHandler.exitApp();
					return true;
				},
			);

			return () => backHandler.remove();
		}, []),
	);

	const onPressHandler = async () => {
		auth()
			.sendSignInLinkToEmail(email, {
				android: { packageName: 'com.heartbitwalletclient' },
				handleCodeInApp: true,
				iOS: { bundleId: 'com.heartbit.heartBitWalletClient' },
				url: 'https://heartbit.page.link/ghHK',
				dynamicLinkDomain: 'heartbit.page.link',
			})
			.catch(err => console.log(err));
	};

	return (
		<Gradient>
			<Wrapper>
				<Main>
					<Logo source={logo} />
					<Title weight="bold">Check your email inbox</Title>
					<Container>
						<Subheadline color="#3A3A3C">We have sent an email to:</Subheadline>
						<Subheadline color="#3A3A3C" weight="bold">
							{email}
						</Subheadline>
					</Container>
					{(authStatus === 'loading' || signInStatus === 'loading') && (
						<ActivityIndicator
							color={'#F68F2A'}
							size={'large'}
							style={{ marginTop: 30 }}
						/>
					)}
				</Main>
				<Container>
					<Subheadline color="#3A3A3C" style={{ textAlign: 'center' }}>
						Didn't get your email or something not working? Check your spam
						folder or
						<Subheadline color="#FF2D55" onPress={onPressHandler}>
							{' Try again'}
						</Subheadline>
						.
					</Subheadline>
					<Footnote
						color="#8E8E93"
						style={{ textAlign: 'center', marginTop: 24 }}
					>
						If you still see this screen even after clicking the link in the
						email, try killing the app and opening it again.
					</Footnote>
				</Container>
			</Wrapper>
		</Gradient>
	);
};

export default EmailSent;

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-around;
	padding-horizontal: 31px;
`;

const Main = styled.View`
	align-items: center;
	padding-top: 100px;
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
