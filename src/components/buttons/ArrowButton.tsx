import React from 'react';
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

// components
import { Subheadline } from 'components/common';

// assets
import ChevronRight from 'assets/img/ic_chevron.right.svg';

type Props = {
	text: string;
	onPress: () => void;
	btnStyle?: ViewStyle;
};

const ArrowButton = ({ text, onPress, btnStyle }: Props) => {
	return (
		<Wrapper style={btnStyle} onPress={onPress}>
			<Subheadline weight="bold" color="#3A3A3C">
				{text}
			</Subheadline>
			<Icon source={ChevronRight} />
		</Wrapper>
	);
};

export default ArrowButton;

const Wrapper = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: 12px;
	border: 2px solid #f68f2a;
	padding-vertical: 15px;
	padding-horizontal: 16px;
`;

const Icon = styled.Image``;
