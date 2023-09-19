import React from 'react';
import styled from 'styled-components/native';

// components
import { Subheadline } from 'components/common';

type Props = {
	text: string;
	onPress: () => void;
	active?: boolean;
};

const SelectButton = ({ text, onPress, active }: Props) => {
	return (
		<Wrapper onPress={onPress}>
			<Text>{text}</Text>
		</Wrapper>
	);
};

export default SelectButton;

const Wrapper = styled.TouchableOpacity`
	width: 45%;
	align-items: center;
	border: 1px solid #ff2d55;
	border-radius: 4px;
	padding-vertical: 4.5px;
`;

const Text = styled(Subheadline)`
	color: #ff2d55;
`;
