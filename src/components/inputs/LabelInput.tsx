import { Footnote } from 'components/common';
import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

type Props = {
	label?: string;
	inputProps: TextInputProps;
};

const LabelInput = ({ label, inputProps }: Props) => {
	return (
		<Wrapper>
			{!!label && (
				<Footnote weight="bold" color="#8E8E93">
					{label}
				</Footnote>
			)}
			<Input {...inputProps} placeholderTextColor={'#AEAEB2'} multiline />
		</Wrapper>
	);
};

export default LabelInput;

const Wrapper = styled.View``;

const Input = styled.TextInput`
	border-radius: 8px;
	border: 0.5px solid #8e8e93;
	background-color: #fff;
	font-size: 17px;
	line-height: 22px;
	font-family: 'Pretendard-Regular';
	color: #3a3a3c;
	margin-top: 8px;
	padding-horizontal: 16px;
	padding-vertical: 11px;
`;
