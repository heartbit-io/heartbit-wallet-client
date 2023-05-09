import React from 'react';
import styled from 'styled-components/native';
import {
	DrawerContentComponentProps,
	createDrawerNavigator,
} from '@react-navigation/drawer';
import { useAppSelector } from 'hooks';

// tabs
import BottomTabs from './BottomTabs';

// components
import { Footnote, Headline } from 'components';

// assets
import ChevronRight from 'assets/img/ic_chevron.right.svg';
import Twitter from 'assets/img/twitter.svg';
import Message from 'assets/img/message.svg';

const Drawer = createDrawerNavigator<DrawerTabTypes>();

const DrawerTabs = () => {
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
	const { userData } = useAppSelector(state => state.user);

	return (
		<Wrapper>
			<Container>
				<RowWrapper onPress={() => navigation.navigate('MyQuestions')}>
					<Headline weight="bold">My Questions</Headline>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper onPress={() => navigation.navigate('Transactions')}>
					<Headline weight="bold">Transactions</Headline>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper>
					<Headline weight="bold">Help</Headline>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper>
					<Headline weight="bold">Send Feedback</Headline>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<SocialWrapper>
					<Social>
						<Icon source={Twitter} />
					</Social>
					<Social>
						<Icon source={Message} />
					</Social>
				</SocialWrapper>
			</Container>
			<Container>
				<RowWrapper borderTop={true}>
					<Headline>{userData?.email}</Headline>
					<Icon source={ChevronRight} />
				</RowWrapper>
				<RowWrapper removeBorderBottom={true}>
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
	margin-right: 5;
`;

const Icon = styled.Image``;
