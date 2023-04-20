import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { scale, verticalScale } from 'styles/responsive-size';

const InputField = (props: TextInputProps) => {
	return <Input {...props} />;
};

export default InputField;

const Input = styled.TextInput`
	height: ${verticalScale(44)};
	width: ${scale(340)};
	background-color: #fff;
	border: ${scale(1)}px solid #d1d1d6;
	border-radius: ${scale(14)};
	font-size: 17px;
`;
