import React, { useRef, useState } from 'react';
import { InputAccessoryView, Button, TextInput } from 'react-native';
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
	const input1Ref = useRef<TextInput>(null);
	const input2Ref = useRef<TextInput>(null);
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

	const onPressPrev = () => {
		if (input1Ref.current && input2Ref.current && input2Ref.current.isFocused())
			input1Ref.current.focus();
	};

	const onPressNext = () => {
		if (input1Ref.current && input1Ref.current.isFocused() && input2Ref.current)
			input2Ref.current.focus();
	};

	const onPressDone = () => {
		if (input1Ref.current && input2Ref.current) {
			input1Ref.current.blur();
			input2Ref.current.blur();
		}
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
					inputRef={input1Ref}
					inputProps={{
						placeholder: 'Enter your question here',
						value: generalQuestion,
						style: { height: 88 },
						onChangeText: setGeneralQuestion,
					}}
					errorMsg={'Tell us a little more, using at least 20 characters.'}
					showError={0 < generalQuestion.length && generalQuestion.length < 20}
				/>
				<Space height={16} />
				<LabelInput
					label="Age, Sex, and Ethnicity (Optional)"
					inputRef={input2Ref}
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
						<Button onPress={onPressPrev} title="Prev" />
						<Space width={5} />
						<Button onPress={onPressNext} title="Next" />
					</PrevNextWrapper>
					<Button onPress={onPressDone} title="Done" />
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
	background-color: #f4f4f4;
	border-top-width: 1px;
	border-top-color: #c7c7cc;
	padding-horizontal: 10px;
`;

const PrevNextWrapper = styled.View`
	flex-direction: row;
`;
