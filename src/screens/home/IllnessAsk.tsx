import React, { useRef, useState } from 'react';
import { InputAccessoryView, TextInput, Button } from 'react-native';
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

type Props = NativeStackScreenProps<RootStackType, 'IllnessAsk'>;

function IllnessAsk({ navigation }: Props) {
	const bottom = useSafeAreaInsets().bottom;
	const input1Ref = useRef<TextInput>(null);
	const input2Ref = useRef<TextInput>(null);
	const input3Ref = useRef<TextInput>(null);
	const input4Ref = useRef<TextInput>(null);
	const input5Ref = useRef<TextInput>(null);
	const input6Ref = useRef<TextInput>(null);
	const [history, setHistory] = useState('');
	const [medications, setMedications] = useState('');
	const [pastIllness, setPastIllness] = useState('');
	const [personalInfo, setPersonalInfo] = useState('');
	const [lifestyle, setLifestyle] = useState('');
	const [specificQuestion, setSpecificQuestion] = useState('');

	const navigateToBounty = () => {
		navigation.navigate('Bounty', {
			isGeneralQuestion: false,
			generalQuestion: '',
			history,
			medications,
			pastIllness,
			personalInfo,
			lifestyle,
			specificQuestion,
		});
	};

	const onPressPrev = () => {
		if (
			input1Ref.current &&
			input2Ref.current &&
			input3Ref.current &&
			input4Ref.current &&
			input5Ref.current &&
			input6Ref.current
		) {
			if (input2Ref.current.isFocused()) input1Ref.current.focus();
			else if (input3Ref.current.isFocused()) input2Ref.current.focus();
			else if (input4Ref.current.isFocused()) input3Ref.current.focus();
			else if (input5Ref.current.isFocused()) input4Ref.current.focus();
			else if (input6Ref.current.isFocused()) input5Ref.current.focus();
		}
	};

	const onPressNext = () => {
		if (
			input1Ref.current &&
			input2Ref.current &&
			input3Ref.current &&
			input4Ref.current &&
			input5Ref.current &&
			input6Ref.current
		) {
			if (input1Ref.current.isFocused()) input2Ref.current.focus();
			else if (input2Ref.current.isFocused()) input3Ref.current.focus();
			else if (input3Ref.current.isFocused()) input4Ref.current.focus();
			else if (input4Ref.current.isFocused()) input5Ref.current.focus();
			else if (input6Ref.current.isFocused()) input5Ref.current.focus();
		}
	};

	const onPressDone = () => {
		if (
			input1Ref.current &&
			input2Ref.current &&
			input3Ref.current &&
			input4Ref.current &&
			input5Ref.current &&
			input6Ref.current
		) {
			input1Ref.current.blur();
			input2Ref.current.blur();
			input3Ref.current.blur();
			input4Ref.current.blur();
			input5Ref.current.blur();
			input6Ref.current.blur();
		}
	};

	return (
		<Wrapper>
			<Header headerRight={true} />
			<ScrollWrapper extraHeight={120}>
				<LargeTitle weight="bold">What brings you in today?</LargeTitle>
				<Switch onPress={() => navigation.replace('GeneralAsk')}>
					<Icon source={Arrow} />
					<Footnote weight="bold" color="#007AFF">
						I’m not sick, but I have a general health question
					</Footnote>
				</Switch>
				<LabelInput
					inputRef={input1Ref}
					label="What are your symptoms?"
					inputProps={{
						placeholder: 'Explain how and when started, what bothers most.',
						value: history,
						onChangeText: setHistory,
						style: {
							minHeight: 88,
						},
					}}
					errorMsg={'Tell us a little more, using at least 50 characters.'}
					showError={0 < history.length && history.length < 50}
				/>
				<Space height={16} />
				<LabelInput
					inputRef={input2Ref}
					label="What medication do you currently take? (Optional)"
					inputProps={{
						placeholder: 'e.g., MTX 1.5 tablets (2 weeks duration)',
						value: medications,
						onChangeText: setMedications,
					}}
				/>
				<Space height={16} />
				<LabelInput
					inputRef={input3Ref}
					label="Past or pre-existing medical history of you or your family (Optional)"
					inputProps={{
						placeholder: 'e.g., Early cataracts, Arthritis',
						value: pastIllness,
						onChangeText: setPastIllness,
					}}
				/>
				<Space height={16} />
				<LabelInput
					inputRef={input4Ref}
					label="Age, Sex, and Ethnicity (Optional)"
					inputProps={{
						placeholder: 'e.g., 24 yr old, male, Korean american',
						value: personalInfo,
						onChangeText: setPersonalInfo,
					}}
				/>
				<Space height={16} />
				<LabelInput
					inputRef={input5Ref}
					label="Do you have any allergies or dietary habits? and how often do you exercise? (Optional)"
					inputProps={{
						placeholder: `e.g., I've been a static vegan for 3 yrs`,
						value: lifestyle,
						onChangeText: setLifestyle,
					}}
				/>
				<Space height={16} />
				<LabelInput
					inputRef={input6Ref}
					label="Do you have any specific question about your health issue? (Optional)"
					inputProps={{
						placeholder: 'e.g., Which specialist should I see?',
						value: specificQuestion,
						onChangeText: setSpecificQuestion,
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
					active={history.length >= 50}
				/>
			</ButtonWrapper>
		</Wrapper>
	);
}

export default IllnessAsk;

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
