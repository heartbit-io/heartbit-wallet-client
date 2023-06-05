import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

// components
import { Body } from 'components/common';

type Props = {
	text: string;
	onPress: () => void;
	active?: boolean;
	buttonStyle?: ViewStyle;
	textStyle?: TextStyle;
};

const MainButton = ({
	text,
	onPress,
	active = true,
	buttonStyle,
	textStyle,
}: Props) => {
	return (
		<Wrapper
			style={buttonStyle}
			active={active}
			onPress={onPress}
			activeOpacity={active ? 0.2 : 1}
			disabled={!active}
		>
			<Body weight="bold" color="#fff" style={textStyle}>
				{text}
			</Body>
		</Wrapper>
	);
};

export default MainButton;

const Wrapper = styled.TouchableOpacity<{ active?: boolean }>`
	height: 44px;
	width: 100%;
	justify-content: center;
	align-items: center;
	border-radius: 14px;
	background-color: ${({ active }) => (active ? '#F68F2A' : '#E5E5EA')};
`;
