import React from 'react';
import styled from 'styled-components/native';

type Props = {
	width?: number;
	height?: number;
};

const Space = ({ width, height }: Props) => {
	return <Wrapper width={width} height={height} />;
};

export default Space;

const Wrapper = styled.View<{ width?: number; height?: number }>`
	width: ${({ width }) => width || 0}px;
	height: ${({ height }) => height || 0}px;
`;
