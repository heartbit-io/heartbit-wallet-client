import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

// components
import { Subheadline } from 'components/common';

type Props = {
	icon: ImageSourcePropType;
	text: string;
};

const EmptyList = ({ icon, text }: Props) => {
	return (
		<Wrapper>
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
