import React, { useState } from 'react';
import { InputAccessoryView, Button } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// components
import {
	Footnote,
	Header,
	LabelInput,
	LargeTitle,
	MainButton,
	Space,
} from 'components';

// assets
import Arrow from 'assets/img/Arrow.svg';

type Props = NativeStackScreenProps<RootStackType, 'GeneralAsk'>;

function GeneralAsk({ navigation }: Props) {
	const bottom = useSafeAreaInsets().bottom;
	const [generalQuestion, setGeneralQuestion] = useState('');
	const [personalInfo, setPersonalInfo] = useState('');

	const navigateToBounty = () => {
		navigation.navigate('Bounty', {
			isGeneralQuestion: true,
			generalQuestion,
			personalInfo,
			history: '',
			medications: '',
			pastIllness: '',
			others: '',
		});
	};

	return (
		<Wrapper>
			<Header headerRight={true} />
			<ScrollWrapper extraHeight={120}>
				<LargeTitle weight="bold">What do you want to ask?</LargeTitle>
				<Switch onPress={() => navigation.replace('IllnessAsk')}>
					<Icon source={Arrow} />
					<Footnote weight="bold" color="#007AFF">
						I’d like to ask about my sickness
					</Footnote>
				</Switch>
				<LabelInput
					label=""
					inputProps={{
						placeholder: 'Enter your question here',
						value: generalQuestion,
						onChangeText: setGeneralQuestion,
						style: { height: 88 },
					}}
					errorMsg={'Tell us a little more, using at least 20 characters.'}
					showError={0 < generalQuestion.length && generalQuestion.length < 20}
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
				<Space height={30} />
			</ScrollWrapper>
			<InputAccessoryView nativeID={'labelInput'}>
				<InputAccessoryWrapper>
					<PrevNextWrapper>
						<Button onPress={() => {}} title="Prev" />
						<Button onPress={() => {}} title="Next" />
					</PrevNextWrapper>
					<Button onPress={() => {}} title="Done" />
				</InputAccessoryWrapper>
			</InputAccessoryView>
			<ButtonWrapper paddingBottom={bottom}>
				<MainButton
					text={'Next'}
					onPress={navigateToBounty}
					buttonStyle={{ height: 50 }}
					active={generalQuestion.length >= 20}
				/>
			</ButtonWrapper>
		</Wrapper>
	);
}

export default GeneralAsk;

const Wrapper = styled.KeyboardAvoidingView`
	flex: 1;
	background-color: #fff5ed;
`;

const ScrollWrapper = styled(KeyboardAwareScrollView)`
	padding-top: 5px;
	padding-horizontal: 30px;
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

const ButtonWrapper = styled.View<{ paddingBottom: number }>`
	padding-top: 12px;
	padding-bottom: ${({ paddingBottom }) => paddingBottom || 20}px;
	padding-horizontal: 16px;
`;

const InputAccessoryWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

const PrevNextWrapper = styled.View`
	flex-direction: row;
`;
