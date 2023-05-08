import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

// components
import { Body } from 'components/common';

type Props = {
	text: string;
	onPress: () => void;
	btnStyle?: ViewStyle;
	textStyle?: TextStyle;
};

const Button = ({ text, onPress, btnStyle, textStyle }: Props) => {
	return (
		<Wrapper onPress={onPress} style={btnStyle}>
			<Body color="#fff" style={textStyle}>
				{text}
			</Body>
		</Wrapper>
	);
};

export default Button;

const Wrapper = styled.TouchableOpacity`
	flex: 1;
	height: 54px;
	border-radius: 14px;
	background-color: #5856d6;
	align-items: center;
	justify-content: center;
`;
