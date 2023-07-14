import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { useAuth, useFirebaseLink } from 'hooks';

// assets
import logo from 'assets/logo/logo.svg';

// components
import { Footnote, Gradient, Subheadline, Title2 } from 'components';

type Props = NativeStackScreenProps<RootStackType, 'EmailSent'>;

const EmailSent = ({ route }: Props) => {
	const email = route?.params?.email;
	const { authStatus } = useAuth();
	const { signInStatus } = useFirebaseLink();

	const onPressHandler = async () => {
		auth()
			.sendSignInLinkToEmail(email, {
				android: { packageName: 'com.heartbitwalletclient' },
				handleCodeInApp: true,
				iOS: { bundleId: 'com.heartbit.heartBitWalletClient' },
				url: 'https://heartbit.page.link/ghHK',
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
					<Footnote color="#3A3A3C">
						Didn’t get your email or something not working?
					</Footnote>
					<TryAgain onPress={onPressHandler}>
						<Footnote color="#FF2D55">Try again</Footnote>
					</TryAgain>
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
	padding-horizontal: 25px;
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

const TryAgain = styled.TouchableOpacity``;
