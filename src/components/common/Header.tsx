import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

// assets
import chevronLeft from 'assets/img/chevron.left.svg';

type Props = {
	headerTitle?: string;
	headerLeft?: boolean;
	headerRight?: boolean;
	onPressHeaderLeft?: () => {};
	onPressHeaderRight?: () => {};
	headerLeftTitle?: string;
	hearderRightTitle?: string;
};

const Header = ({
	headerTitle = '',
	headerLeft,
	headerRight,
	onPressHeaderLeft,
	onPressHeaderRight,
	headerLeftTitle = 'Back',
	hearderRightTitle = 'Cancel',
}: Props) => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	const onPressHeaderLeftHandler = () => {
		if (onPressHeaderLeft) {
			onPressHeaderLeft();
		} else {
			navigation.goBack();
		}
	};

	const onPressHeaderRightHandler = () => {
		if (onPressHeaderRight) {
			onPressHeaderRight();
		} else {
			navigation.navigate('DrawerTabs');
		}
	};

	const renderHeaderLeft = () => {
		if (headerLeft) {
			return (
				<Wrapper onPress={onPressHeaderLeftHandler}>
					<Icon source={chevronLeft} />
					<Back>{headerLeftTitle}</Back>
				</Wrapper>
			);
		}
		return '';
	};

	const renderHeaderRight = () => {
		if (headerRight) {
			return (
				<Wrapper onPress={onPressHeaderRightHandler}>
					<Cancel>{hearderRightTitle}</Cancel>
				</Wrapper>
			);
		}
		return null;
	};

	useEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTitle: headerTitle,
			headerStyle: { backgroundColor: '#FFF5ED' },
			headerTitleAlign: 'center',
			headerLeft: renderHeaderLeft,
			headerRight: renderHeaderRight,
		});
	});

	return null;
};

export default Header;

const Wrapper = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Icon = styled.Image``;

const Back = styled.Text`
	font-family: 'Pretendard-Bold';
	font-size: 17px;
	font-weight: 400;
	line-height: 22px;
	color: #ff2d55;
	margin-left: 9px;
`;

const Cancel = styled.Text`
	font-family: 'Pretendard-Regular';
	font-size: 17px;
	font-weight: 400;
	line-height: 22px;
	color: #ff2d55;
	margin-left: 9px;
`;
