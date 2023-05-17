import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

// assets
import BGGradient from 'assets/img/BGgradient.png';

type Props = {
	children: ReactNode;
};

const Gradient = ({ children }: Props) => {
	return (
		<Wrapper>
			<BGImg source={BGGradient}>{children}</BGImg>
		</Wrapper>
	);
};

export default Gradient;

const Wrapper = styled.View`
	flex: 1;
	background-color: #fff5ed;
`;

const BGImg = styled.ImageBackground`
	flex: 1;
`;
