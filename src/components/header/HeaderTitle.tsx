import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// components
import { LargeTitle } from 'components/common';

// assets
import MenuIcon from 'assets/img/ic_menu.svg';
import Alpha from 'assets/img/alpha.svg';

// utils
import { OS } from 'utils/utility';

const HeaderTitle = () => {
	const statusBarHeight = useSafeAreaInsets().top;

	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	return (
		<HeaderWrapper statusBarHeight={statusBarHeight}>
			<Title>Wallet</Title>
			<RightContainer>
				<Icon source={Alpha} style={{ marginRight: 16 }} />
				<Btn onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
					<Icon source={MenuIcon} />
				</Btn>
			</RightContainer>
		</HeaderWrapper>
	);
};

export default HeaderTitle;

const HeaderWrapper = styled.View<{ statusBarHeight: number }>`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: ${() => (OS === 'ios' ? 44 : 56)}px;
	margin-top: ${({ statusBarHeight }) => statusBarHeight}px;
	margin-horizontal: 16px;
`;

const Title = styled(LargeTitle)`
	font-weight: bold;
	margin-left: 14px;
	color: #1c1c1e;
`;

const RightContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

const Btn = styled.TouchableOpacity``;

const Icon = styled.Image``;
