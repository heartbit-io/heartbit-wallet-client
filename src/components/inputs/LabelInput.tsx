import React from 'react';
import { TextInputProps, TextStyle } from 'react-native';
import styled from 'styled-components/native';

// components
import { Caption1, Footnote } from 'components/common';

type Props = {
	label?: string;
	labelStyle?: TextStyle;
	inputProps: TextInputProps;
	errorMsg?: string;
	showError?: boolean;
};

const LabelInput = ({
	label,
	labelStyle,
	inputProps,
	errorMsg,
	showError,
}: Props) => {
	return (
		<Wrapper>
			{!!label && (
				<Footnote weight="bold" color="#8E8E93" style={labelStyle}>
					{label}
				</Footnote>
			)}
			<Input
				placeholderTextColor={'#AEAEB2'}
				editable={true}
				multiline
				{...inputProps}
				error={showError}
				inputAccessoryViewID={'labelInput'}
			/>
			{showError && <ErrorMessage>{errorMsg}</ErrorMessage>}
		</Wrapper>
	);
};

export default LabelInput;

const Wrapper = styled.View``;

const Input = styled.TextInput<{ editable?: boolean; error?: boolean }>`
	max-height: 150px;
	border-radius: 8px;
	border-color: ${({ error }) => (error ? '#FF3B30' : '#8e8e93')};
	border-width: ${({ error }) => (error ? 1 : 0.5)}px;
	background-color: ${({ editable }) => (editable ? '#fff' : '#F2F2F7')};
	font-size: 17px;
	line-height: 22px;
	font-family: 'Pretendard-Regular';
	color: #3a3a3c;
	margin-top: 8px;
	padding-horizontal: 16px;
	padding-vertical: 11px;
`;

const ErrorMessage = styled(Caption1)`
	color: #ff3b30;
	margin-top: 8px;
`;
