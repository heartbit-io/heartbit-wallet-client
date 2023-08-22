import React from 'react';
import styled from 'styled-components/native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from 'hooks';

// components
import { Callout } from 'components/common';

// utils
import { OS } from 'utils/utility';

// assets
import Menu from 'assets/img/ic_menu.svg';
import Sat from 'assets/img/ic_sat.svg';
import Alpha from 'assets/img/alpha.svg';

const HomeHeader = () => {
	const statusBarHeight = useSafeAreaInsets().top;
	const { userData } = useAppSelector(state => state.user);
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	return (
		<HeaderWrapper statusBarHeight={statusBarHeight}>
			<LeftContainer onPress={() => navigation.navigate('Wallet')}>
				<Icon style={{ marginHorizontal: 6 }} source={Sat} />
				<TextCallout> {userData?.btcBalance.toLocaleString()}</TextCallout>
			</LeftContainer>
			<RightContainer>
				<Icon source={Alpha} style={{ marginRight: 16 }} />
				<ButtonWrapper
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
				>
					<Icon source={Menu} />
				</ButtonWrapper>
			</RightContainer>
		</HeaderWrapper>
	);
};

export default HomeHeader;

const HeaderWrapper = styled.View<{ statusBarHeight: number }>`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: ${() => (OS === 'ios' ? 44 : 56)}px;
	margin-top: ${({ statusBarHeight }) => statusBarHeight}px;
	margin-horizontal: 16px;
`;

const LeftContainer = styled.TouchableOpacity`
	flex-direction: row;
	border-radius: 8px;
	background: #ffffff66;
	align-items: center;
	padding-vertical: 6px;
`;

const TextCallout = styled(Callout)`
	margin-right: 12px;
`;

const Icon = styled.Image`
	resize-mode: contain;
`;

const RightContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

const ButtonWrapper = styled.TouchableOpacity``;
