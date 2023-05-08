import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';

// components
import { LargeTitle } from 'components/common';

// assets
import MenuIcon from 'assets/img/ic_menu.svg';

const HeaderTitle = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	const renderHeaderLeft = () => {
		return <Title weight="bold">Wallet</Title>;
	};

	const renderHeaderRight = () => {
		return (
			<Wrapper onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
				<Icon source={MenuIcon} />
			</Wrapper>
		);
	};

	useEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerLeft: renderHeaderLeft,
			headerRight: renderHeaderRight,
		});
	}, []);

	return null;
};

export default HeaderTitle;

const Title = styled(LargeTitle)`
	margin-left: 30px;
	color: #1c1c1e;
`;

const Wrapper = styled.TouchableOpacity`
	padding-horizontal: 16px;
`;

const Icon = styled.Image``;
