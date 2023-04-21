import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const BigText = ({ allowFontScaling = false, ...props }: TextProps) => {
	return <Text {...props} allowFontScaling={allowFontScaling} />;
};

export default BigText;

const Text = styled.Text`
	font-size: 34px;
	font-weight: bold;
`;
