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
import menu from 'assets/img/ic_menu.svg';
import sat from 'assets/img/ic_sat.svg';

const HomeHeader = () => {
	const statusBarHeight = useSafeAreaInsets().top;
	const { userData } = useAppSelector(state => state.user);
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	return (
		<HeaderWrapper statusBarHeight={statusBarHeight}>
			<LeftContainer onPress={() => navigation.navigate('Wallet')}>
				<Icon style={{ marginHorizontal: 6 }} source={sat} />
				<TextCallout> {userData?.btcBalance.toLocaleString()}</TextCallout>
			</LeftContainer>
			<ButtonWrapper
				onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
			>
				<Icon source={menu} />
			</ButtonWrapper>
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

const ButtonWrapper = styled.TouchableOpacity``;

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
