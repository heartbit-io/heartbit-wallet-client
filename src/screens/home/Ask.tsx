import styled from 'styled-components/native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainButton } from 'components';
import { LargeTitle } from 'components/common';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Ask'>;

function Ask({ navigation }: Props) {
	const [askContent, setAskContent] = useState('');
	return (
		<ScrollWrapper>
			<WrapperLeft>
				<Text>What do you want to ask?</Text>
				<Input
					textAlign="center"
					returnKeyType="go"
					multiline={true}
					blurOnSubmit
					onChangeText={(question: string) => setAskContent(question)}
					onSubmitEditing={async () => {
						try {
							navigation.navigate('Bounty', { askContent: askContent });
						} catch (e) {}
					}}
					placeholder="Ask questions along with explaining your symptoms, medical history, and current medications."
				/>
			</WrapperLeft>
			<Wrapper>
				<MainButton
					onPress={() =>
						askContent === ''
							? ''
							: navigation.navigate('Bounty', { askContent: askContent })
					}
					active={askContent === '' ? false : true}
					text={'Next'}
				/>
			</Wrapper>
		</ScrollWrapper>
	);
}

export default Ask;

const Text = styled(LargeTitle)`
	font-weight: bold;
`;

const Input = styled.TextInput`
	text-align: left;
	font-size: 20px;
	margin-top: 18px;
`;

const ScrollWrapper = styled.ScrollView`
	flex: 1;
	background-color: #fff5ed;
`;

const Wrapper = styled.View`
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 300px;
	padding-horizontal: 25px;
`;

const WrapperLeft = styled.View`
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin-horizontal: 25px;
`;
