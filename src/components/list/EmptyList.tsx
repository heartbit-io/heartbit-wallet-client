import React from 'react';
import { ImageSourcePropType, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

// components
import { Subheadline } from 'components/common';

type Props = {
	icon: ImageSourcePropType;
	text: string;
	wrapperStyle?: ViewStyle;
};

const EmptyList = ({ icon, text, wrapperStyle }: Props) => {
	return (
		<Wrapper style={wrapperStyle}>
			<Icon source={icon} />
			<Subheadline style={{ textAlign: 'center', color: '#3A3A3C' }}>
				{text}
			</Subheadline>
		</Wrapper>
	);
};

export default EmptyList;

const Wrapper = styled.View`
	align-items: center;
	justify-content: center;
`;

const Icon = styled.Image`
	margin-bottom: 16.17px;
`;
