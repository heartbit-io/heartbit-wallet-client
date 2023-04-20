import React from 'react';
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { scale, verticalScale } from 'styles/responsive-size';

type Props = {
	text: string;
	onPress: () => void;
	active?: boolean;
	buttonStyle?: ViewStyle;
};

const MainButton = ({ text, onPress, active = true, buttonStyle }: Props) => {
	return (
		<Wrapper style={buttonStyle} active={active} onPress={onPress}>
			<Text>{text}</Text>
		</Wrapper>
	);
};

export default MainButton;

const Wrapper = styled.TouchableOpacity<{ active?: boolean }>`
	height: ${verticalScale(44)};
	width: ${scale(340)};
	justify-content: center;
	align-items: center;
	border-radius: ${scale(14)};
	background-color: ${({ active }) => (active ? '#F68F2A' : '#E5E5EA')};
`;
const Text = styled.Text`
	font-size: 17px;
	color: #fff;
`;
