import React, { useState } from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// components
import {
	Body,
	Footnote,
	Header,
	InputField,
	MainButton,
	Subheadline,
} from 'components';
import { validateEmail } from 'utils/utility';
import { Alert, Linking } from 'react-native';
import { useAppSelector } from 'hooks';
// assets
import ChevronRight from 'assets/img/ic_chevron.right.svg';

type Props = NativeStackScreenProps<RootStackType, 'MyAccount'>;

const MyAccount = ({ navigation }: Props) => {
	const [email, setEmail] = useState('');
	const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
	const { userData } = useAppSelector(state => state.user);

	const onEmailChange = (text: string) => {
		setEmail(text);
		setIsValidEmail(validateEmail(text) ? true : false);
	};

	return (
		<Wrapper>
			<ScrollWrapper>
				<Header headerTitle={'My Account'} headerLeft={true} />
				<FootnoteText>Current Email Address</FootnoteText>
				<BodyText>{userData?.email}</BodyText>
				<FootnoteText>New Email Address</FootnoteText>
				<InputField
					style={{ textAlign: 'left', paddingLeft: 16 }}
					value={email}
					onChangeText={onEmailChange}
					placeholder="Enter new email here"
					placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
					textAlign="center"
					keyboardType={'email-address'}
					autoCapitalize={'none'}
				/>
				<MainButton
					text={'Change'}
					onPress={() => {
						Alert.alert('Please check your email');
					}}
					buttonStyle={{ marginTop: 8 }}
					active={isValidEmail}
				/>
				{userData?.role ===
				'doctor' /* will be replaced by user after conference */ ? (
					<SubheadlineText
						onPress={() => {
							Linking.openURL('https://airtable.com/shrRcckkSSQoKQzYe');
						}}
					>
						Are you a doctor?
					</SubheadlineText>
				) : (
					<DoctorWrapper>
						<FootnoteText>Verified as as doctor</FootnoteText>
						<DoctorButton
							onPress={() => {
								navigation.navigate('DoctorQRScan');
							}}
						>
							<SignInText>Sign-in to Doctor's Portal</SignInText>
							<Icon source={ChevronRight} />
						</DoctorButton>
						<DoctorButton
							onPress={() => {
								Alert.alert('Will be implemented soon');
							}}
						>
							<ProfileText>Name, profile picture</ProfileText>
							<Icon source={ChevronRight} />
						</DoctorButton>
						<FootnoteRegular>
							If you hide your name and profile picture, others can only see if
							you've been verified with which license.
						</FootnoteRegular>
					</DoctorWrapper>
				)}
			</ScrollWrapper>
		</Wrapper>
	);
};

export default MyAccount;

const Wrapper = styled.View`
	flex: 1;
	background-color: #fff5ed;
`;

const ScrollWrapper = styled.ScrollView`
	flex: 1;
	margin-horizontal: 16px;
	margin-top: 24px;
`;

const DoctorWrapper = styled.View`
	margin-top: 50px;
	margin-bottom 290px;
`;

const BodyText = styled(Body)`
	height: 44px;
	width: 100%;
	background-color: #fff;
	border: 1px solid #d1d1d6;
	border-radius: 14px;
	text-align: left;
	line-height: 40px;
	color: #8e8e93;
	background-color: #f2f2f7;
	padding-left: 16px;
	margin-bottom: 24px;
`;

const FootnoteText = styled(Footnote)`
	font-weight: bold;
	color: #8e8e93;
	margin-left: 16px;
	margin-bottom: 8px;
`;

const FootnoteRegular = styled(Footnote)`
	color: #8e8e93;
	margin-horizontal: 16px;
`;

const DoctorButton = styled.TouchableOpacity`
	height: 44px;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: 14px;
	background-color: white;
	margin-bottom: 8px;
	padding-horizontal: 16px;
`;

const SignInText = styled(Body)`
	color: #ff2d55;
`;

const ProfileText = styled(Body)``;

const SubheadlineText = styled(Subheadline)`
	margin-top: 56px;
	color: #ff2d55;
	text-align: center;
`;

const Icon = styled.Image``;
