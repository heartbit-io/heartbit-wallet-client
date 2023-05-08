import React from 'react';
import styled from 'styled-components/native';

// components
import { Body, Title1 } from 'components/common';

// assets
import ChevronRight from 'assets/img/ic_chevron.right.svg';

type Props = {
	title: string;
	btnText: string;
	onPress: () => void;
};

const ArrowButtonWithText = ({ title, btnText, onPress }: Props) => {
	return (
		<Wrapper>
			<Title weight="bold">{title}</Title>
			<Button onPress={onPress}>
				<ButtonText>{btnText}</ButtonText>
				<Icon source={ChevronRight} />
			</Button>
		</Wrapper>
	);
};

export default ArrowButtonWithText;

const Wrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-horizontal: 16px;
`;

const Title = styled(Title1)`
	color: #8e8e93;
`;

const Button = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

const ButtonText = styled(Body)`
	color: #8e8e93;
	margin-right: 12px;
`;

const Icon = styled.Image``;
