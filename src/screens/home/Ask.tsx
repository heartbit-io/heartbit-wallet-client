import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

// components
import { Header, LargeTitle, MainButton } from 'components';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Ask'>;

function Ask(props: Props) {
	const [askContent, setAskContent] = useState('');

	const navigateToBounty = (askContent: string, { navigation }: Props) => {
		askContent.length < 50
			? ''
			: navigation.navigate('Bounty', { askContent: askContent });
	};

	return (
		<ScrollWrapper>
			<Header headerLeft={true} headerRight={true} />
			<WrapperLeft>
				<Text>What do you want to ask?</Text>
				<Input
					textAlign="center"
					returnKeyType="go"
					multiline={true}
					blurOnSubmit
					onChangeText={(question: string) => setAskContent(question)}
					onSubmitEditing={() => {
						navigateToBounty(askContent, props);
					}}
					placeholder={
						'Explain your symptoms(how and when started), any related medical treatment or tests you have received(and when), current medications, and age and gender.\n\nThe more detailed you are, the more likely you will get a good answer.'
					}
				/>
			</WrapperLeft>
			<Wrapper>
				<MainButton
					onPress={() => navigateToBounty(askContent, props)}
					active={askContent.length < 50 ? false : true}
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
