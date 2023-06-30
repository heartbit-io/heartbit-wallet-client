import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';

// components
import { LargeTitle } from 'components/common';

// assets
import MenuIcon from 'assets/img/ic_menu.svg';
import { OS } from 'utils/utility';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderTitle = () => {
	const statusBarHeight = useSafeAreaInsets().top;

	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	const renderHeaderLeft = () => {
		return <Title>Wallet</Title>;
	};

	const renderHeaderRight = () => {
		return (
			<Wrapper onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
				<Icon source={MenuIcon} />
			</Wrapper>
		);
	};

	return (
		<HeaderWrapper statusBarHeight={statusBarHeight}>
			{renderHeaderLeft()}
			{renderHeaderRight()}
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

const Wrapper = styled.TouchableOpacity``;

const Icon = styled.Image``;
