import React, { useState } from 'react';
import { Alert, Linking } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// components
import {
	Footnote,
	Header,
	Headline,
	LabelInput,
	MainButton,
	Space,
	Subheadline,
} from 'components';

// utils
import { validateEmail } from 'utils/utility';

// hooks
import { useAppSelector } from 'hooks';

// assets
import Check from 'assets/img/check-circle-fill.svg';

type Props = NativeStackScreenProps<RootStackType, 'MyAccount'>;

const MyAccount = ({ navigation }: Props) => {
	const bottom = useSafeAreaInsets().bottom;
	const { userData } = useAppSelector(state => state.user);
	const [email, setEmail] = useState('');
	const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

	const onEmailChange = (text: string) => {
		setEmail(text);
		setIsValidEmail(validateEmail(text) ? true : false);
	};

	const linkingHandler = () =>
		Linking.openURL(
			`https://airtable.com/shrRcckkSSQoKQzYe?prefill_Email+address=${userData?.email}`,
		);

	return (
		<Wrapper>
			<Header headerTitle={'Your Account'} headerLeft={true} />
			<LabelInput
				label="Current Email Address"
				labelStyle={{ marginHorizontal: 16 }}
				inputProps={{
					value: userData?.email,
					editable: false,
					multiline: false,
					style: { color: '#8E8E93' },
				}}
			/>
			{/* <Space height={24} />
			<LabelInput
				label="New Email Address"
				labelStyle={{ marginHorizontal: 16 }}
				inputProps={{
					value: email,
					onChangeText: onEmailChange,
					placeholder: 'Enter new email here',
					keyboardType: 'email-address',
					autoCapitalize: 'none',
					multiline: false,
				}}
			/>
			<MainButton
				text={'Change'}
				onPress={() => Alert.alert('Please check your email')}
				buttonStyle={{ marginTop: 8, borderRadius: 8 }}
				active={isValidEmail}
			/> */}
			{userData?.role === 'user' ? (
				<SubheadlineText onPress={linkingHandler}>
					Are you a doctor?
				</SubheadlineText>
			) : (
				<DoctorWrapper>
					<RowWrapper>
						<Icon source={Check} />
						<Footnote weight="bold" color="#34C759">
							Verified as a doctor
						</Footnote>
					</RowWrapper>
					<Headline style={{ marginVertical: 19 }}>
						https://doctor.heartbit.io
					</Headline>
					<Subheadline color="#8E8E93">
						To start answering patient questions, access the above address from
						your{' '}
						<Subheadline weight="bold" color="#8E8E93">
							desktop.
						</Subheadline>
					</Subheadline>
				</DoctorWrapper>
			)}
			<Footer>
				<DeleteBtn
					bottom={bottom}
					onPress={() => navigation.navigate('DeleteAccount')}
				>
					<Subheadline
						color="#8E8E93"
						style={{ textDecorationLine: 'underline' }}
					>
						Delete my account
					</Subheadline>
				</DeleteBtn>
			</Footer>
		</Wrapper>
	);
};

export default MyAccount;

const Wrapper = styled.View`
	flex: 1;
	background-color: #fff5ed;
	border-top-width: 0.5px;
	border-color: #d1d1d6;
	padding-top: 24px;
	padding-horizontal: 16px;
`;

const SubheadlineText = styled(Subheadline)`
	margin-top: 50px;
	color: #ff2d55;
	text-align: center;
`;

const DoctorWrapper = styled.View`
	margin-top: 50px;
	margin-horizontal: 16px;
`;

const RowWrapper = styled.View`
	flex-direction: row;
	align-items: center;
`;

const Icon = styled.Image`
	margin-right: 8px;
`;

const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
`;

const DeleteBtn = styled.TouchableOpacity<{ bottom: number }>`
	margin-bottom: ${({ bottom }) => bottom + 32}px;
`;
