import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

// components
import {
	Footnote,
	Header,
	LabelInput,
	LargeTitle,
	MainButton,
	Space,
} from 'components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Arrow from 'assets/img/Arrow.svg';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Ask'>;

function Ask(props: Props) {
	const [askContent, setAskContent] = useState('');
	const [isGeneralQuestion, setIsGeneralQuestion] = useState(false);
	const [generalQuestion, setGeneralQuestion] = useState('');
	const [history, setHistory] = useState('');
	const [medications, setMedications] = useState('');
	const [pastIllness, setPastIllness] = useState('');
	const [personalInfo, setPersonalInfo] = useState('');
	const [others, setOthers] = useState('');

	const navigateToBounty = (askContent: string, { navigation }: Props) => {
		askContent.length < 50
			? ''
			: navigation.navigate('Bounty', { askContent: askContent });
	};

	const renderHealthInputs = () => (
		<>
			<LabelInput
				label="History of your present illness"
				inputProps={{
					placeholder: 'Explain how and when started, what bothers most.',
					value: history,
					onChangeText: setHistory,
					style: { height: 88 },
				}}
			/>
			<Space height={16} />
			<LabelInput
				label="Current medications (Optional)"
				inputProps={{
					placeholder: 'e.g., MTX 1.5 tablets (2 weeks duration)',
					value: medications,
					onChangeText: setMedications,
				}}
			/>
			<Space height={16} />
			<LabelInput
				label="Past illness history of you or your family (Optional)"
				inputProps={{
					placeholder: 'e.g., Early cataracts, Arthritis',
					value: pastIllness,
					onChangeText: setPastIllness,
				}}
			/>
			<Space height={16} />
			<LabelInput
				label="Age, Sex, and Ethnicity (Optional)"
				inputProps={{
					placeholder: 'e.g., 24 yr old, male, Korean american',
					value: personalInfo,
					onChangeText: setPersonalInfo,
				}}
			/>
			<Space height={16} />
			<LabelInput
				label="Others (Optional)"
				inputProps={{
					placeholder: 'Share anything that might help',
					value: others,
					onChangeText: setOthers,
				}}
			/>
		</>
	);

	const renderGeneralinputs = () => (
		<>
			<LabelInput
				label="General question"
				inputProps={{
					placeholder: 'Enter your question here',
					value: generalQuestion,
					onChangeText: setGeneralQuestion,
					style: { height: 88 },
				}}
			/>
			<Space height={16} />
			<LabelInput
				label="Age, Sex, and Ethnicity (Optional)"
				inputProps={{
					placeholder: 'e.g., 24 yr old, male, Korean american',
					value: personalInfo,
					onChangeText: setPersonalInfo,
				}}
			/>
		</>
	);

	return (
		<Wrapper>
			<Header headerRight={true} />
			<KeyboardAwareScrollView enableOnAndroid extraScrollHeight={100}>
				<InnerWrapper>
					<LargeTitle weight="bold">What's bothering you?</LargeTitle>
					<Switch onPress={() => setIsGeneralQuestion(!isGeneralQuestion)}>
						<Icon source={Arrow} />
						<Footnote weight="bold" color="#007AFF">
							{isGeneralQuestion
								? 'I’d like to ask about my sickness'
								: 'I’m not sick, but I have a general health question'}
						</Footnote>
					</Switch>
					{isGeneralQuestion ? renderGeneralinputs() : renderHealthInputs()}
				</InnerWrapper>
			</KeyboardAwareScrollView>
		</Wrapper>
	);
}

export default Ask;

const Wrapper = styled.View`
	flex: 1;
	background-color: #fff5ed;
`;

const InnerWrapper = styled.View`
	margin-top: 5px;
	margin-horizontal: 30px;
`;

const Switch = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin-top: 16px;
	margin-bottom: 34px;
`;

const Icon = styled.Image`
	margin-right: 9px;
`;
