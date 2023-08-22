import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import {
	DrawerContentComponentProps,
	createDrawerNavigator,
} from '@react-navigation/drawer';
import { useAppDispatch, useAppSelector } from 'hooks';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import Intercom from '@intercom/intercom-react-native';

// tabs
import BottomTabs from './BottomTabs';

// components
import { Footnote, Headline } from 'components';

// assets
import ChevronRight from 'assets/img/ic_chevron.right.svg';
import Twitter from 'assets/img/twitter.svg';
import Message from 'assets/img/message.svg';

// store
import { resetUserData } from 'store/slices/userSlice';
import { resetQuestions } from 'store/slices/questionsSlice';
import { resetTransactions } from 'store/slices/transactionsSlice';
import messaging from '@react-native-firebase/messaging';
import { deleteUserFcmToken } from 'apis/userApi';

const Drawer = createDrawerNavigator<DrawerTabTypes>();

const DrawerTabs = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	return (
		<Drawer.Navigator
			drawerContent={props => <DrawerView {...props} />}
			screenOptions={{
				headerShown: false,
				drawerPosition: 'right',
				drawerType: 'front',
			}}
		>
			<Drawer.Screen name="BottomTabs" component={BottomTabs} />
		</Drawer.Navigator>
	);
};

const DrawerView = ({ navigation }: DrawerContentComponentProps) => {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.user);

	const signOutHandler = () => {
		auth().signOut();
		// Intercom.logout();
		deleteUserFcmToken();
		messaging().deleteToken();
		dispatch(resetUserData());
		dispatch(resetQuestions());
		dispatch(resetTransactions());
		navigation.reset({
			index: 1,
			routes: [{ name: 'SplashScreen' }, { name: 'EmailSignUp' }],
		});
	};

	return (
		<Wrapper>
			<Container>
				<RowWrapper onPress={() => navigation.navigate('MyQuestions')}>
					<HeadLineText>My Questions</HeadLineText>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper onPress={() => navigation.navigate('Transactions')}>
					<HeadLineText>Transactions</HeadLineText>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper
					onPress={() => Linking.openURL('mailto:support@heartbit.io')}
				>
					<HeadLineText>Get Support</HeadLineText>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper
					onPress={() =>
						Linking.openURL('https://community.heartbit.io/c/feature-requests/')
					}
				>
					<HeadLineText>Send Feedback</HeadLineText>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper
					onPress={() => Linking.openURL('https://heartbit.substack.com/')}
				>
					<HeadLineText>Blog</HeadLineText>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<SocialWrapper>
					<Social
						onPress={() => Linking.openURL('https://twitter.com/heartbit_io')}
					>
						<Icon source={Twitter} />
					</Social>
					<Social onPress={() => Linking.openURL('mailto:social@heartbit.io')}>
						<Icon source={Message} />
					</Social>
				</SocialWrapper>
			</Container>
			<Container>
				<RowWrapper
					borderTop={true}
					onPress={() => navigation.navigate('MyAccount')}
				>
					<HeadLineText>{userData?.email}</HeadLineText>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper removeBorderBottom={true} onPress={signOutHandler}>
					<Footnote color="#8E8E93">Sign out</Footnote>
				</RowWrapper>
			</Container>
		</Wrapper>
	);
};

export default DrawerTabs;

const Wrapper = styled.SafeAreaView`
	flex: 1;
	background-color: #fff5ed;
	justify-content: space-between;
`;

const Container = styled.View``;

const RowWrapper = styled.TouchableOpacity<{
	borderTop?: boolean;
	removeBorderBottom?: boolean;
}>`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom-width: ${p => (p.removeBorderBottom ? 0 : 0.5)}px;
	border-top-width: ${p => (p.borderTop ? 0.5 : 0)}px;
	border-color: rgba(60, 60, 67, 0.36);
	padding-horizontal: 16px;
	padding-vertical: 12px;
`;

const SocialWrapper = styled.View`
	flex-direction: row;
	margin-top: 20px;
	margin-left: 15px;
`;

const Social = styled.TouchableOpacity`
	padding: 10px;
	margin-right: 5px;
`;

const Icon = styled.Image``;

const HeadLineText = styled(Headline)`
	font-weight: bold;
`;
