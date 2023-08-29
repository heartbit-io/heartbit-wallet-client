import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useActivityIndicator } from 'hooks/useActivityIndicator';
import auth from '@react-native-firebase/auth';

// components
import { MainButton, Subheadline, Title2 } from 'components';

// assets
import Check from 'assets/img/check.svg';
import Square from 'assets/img/square.svg';
import SquareCheck from 'assets/img/square-checkmark.svg';

// apis & store
import { deleteAccount } from 'apis/userApi';
import { resetUserData } from 'store/slices/coinSlice';
import { resetQuestions } from 'store/slices/questionsSlice';
import { resetTransactions } from 'store/slices/transactionsSlice';

type Props = NativeStackScreenProps<RootStackType, 'DeleteAccount'>;

const DeleteAccount = ({ navigation }: Props) => {
	const top = useSafeAreaInsets().top;
	const { toggleActivityIndicator } = useActivityIndicator();
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.user);
	const [checked, setChecked] = useState(false);

	const deleteAccountHandler = () => {
		toggleActivityIndicator(true);
		deleteAccount(userData.id)
			.then(res => {
				if (res.success && res.statusCode === 200) {
					auth().signOut();
					dispatch(resetUserData());
					dispatch(resetQuestions());
					dispatch(resetTransactions());
					navigation.reset({
						index: 1,
						routes: [{ name: 'SplashScreen' }, { name: 'EmailSignUp' }],
					});
				} else {
					console.log('Delete user account error: ', res);
				}
			})
			.catch(err => console.log('Delete user error: ', err))
			.finally(() => toggleActivityIndicator(false));
	};

	return (
		<Wrapper paddingTop={top}>
			<Title2 weight="bold">
				Are you sure you want to delete your account?
			</Title2>
			<Row>
				<Icon source={Check} />
				<Subheadline style={{ flex: 1, marginLeft: 15 }}>
					Upon deletion, all assets remaining in the wallet will be reset and
					cannot be recovered. Make sure you have withdrawn them all.
				</Subheadline>
			</Row>
			<Row>
				<Icon source={Check} />
				<Subheadline style={{ flex: 1, marginLeft: 15 }}>
					When you delete your account, all data, including Q&A records, will be
					permanently erased. Back up essential data beforehand.
				</Subheadline>
			</Row>
			<Row>
				<CheckBtn onPress={() => setChecked(!checked)}>
					<Icon source={checked ? SquareCheck : Square} />
				</CheckBtn>
				<Subheadline weight="bold" style={{ flex: 1, marginLeft: 15 }}>
					I have read and agree to the above instructions.
				</Subheadline>
			</Row>
			<MainButton
				text={'Delete Account'}
				onPress={deleteAccountHandler}
				active={checked}
				buttonStyle={{
					marginTop: 84,
					backgroundColor: '#FF3B30',
				}}
			/>
			<MainButton
				text={'Cancel'}
				onPress={() => navigation.goBack()}
				buttonStyle={{
					marginTop: 16,
					backgroundColor: '#fff5ed',
				}}
				textStyle={{ color: '#1C1C1E' }}
			/>
		</Wrapper>
	);
};

export default DeleteAccount;

const Wrapper = styled.View<{ paddingTop: number }>`
	flex: 1;
	background-color: #fff5ed;
	padding-top: ${({ paddingTop }) => paddingTop + 44}px;
	padding-horizontal: 30px;
`;

const Row = styled.View`
	flex-direction: row;
	margin-top: 32px;
`;

const Icon = styled.Image``;

const CheckBtn = styled.TouchableOpacity``;
