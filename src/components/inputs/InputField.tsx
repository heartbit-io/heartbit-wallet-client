import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

const InputField: React.FC<TextInputProps> = props => {
	return <Input {...props} />;
};

export default InputField;

const Input = styled.TextInput`
	height: 44px;
	width: 100%;
	background-color: #fff;
	border: 1px solid #d1d1d6;
	border-radius: 14px;
	font-size: 17px;
`;
