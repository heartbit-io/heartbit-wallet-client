import React, { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

type Props = {
	children: ReactNode;
};

const Gradient: React.FC<Props> = ({ children }) => {
	return (
		<GradientWrapper
			start={{ x: 1.6, y: 0 }}
			end={{ x: 0, y: 1.1 }}
			colors={['#FF7BCA', '#FFC56F', '#FFF5ED']}
		>
			{children}
		</GradientWrapper>
	);
};

export default Gradient;

const GradientWrapper = styled(LinearGradient)`
	flex: 1;
`;
