import { BigText } from 'components/texts';
import styled from 'styled-components/native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainButton } from 'components';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Ask'>;

function Ask({ navigation }: Props) {
	const [askContent, setAskContent] = useState('');
	return (
		<ScrollWrapper>
			<WrapperLeft>
				<BigText>What do you want to ask?</BigText>
				<Input
					allowFontScaling={false}
					textAlign="center"
					returnKeyType="go"
					multiline={true}
					blurOnSubmit
					onChangeText={question => setAskContent(question)}
					onSubmitEditing={async () => {
						try {
							navigation.navigate('Bounty');
						} catch (e) {}
					}}
					placeholder="Write here"
				/>
			</WrapperLeft>
			<Wrapper>
				<MainButton
					onPress={() => navigation.navigate('Bounty')}
					text={'Next'}
				/>
			</Wrapper>
		</ScrollWrapper>
	);
}

export default Ask;

const Input = styled.TextInput`
	background-color: #fff5ed;
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
	margin-horizontal: 25px;
`;

const WrapperLeft = styled.View`
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin-horizontal: 25px;
`;
