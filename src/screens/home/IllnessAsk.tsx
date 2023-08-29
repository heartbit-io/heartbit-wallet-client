import React, { useEffect, useRef, useState } from 'react';
import { TextInput, BackHandler } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// components
import {
	Footnote,
	Header,
	KeyboardAccessory,
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
	const [others, setOthers] = useState('');

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => true,
		);

		return () => backHandler.remove();
	}, []);

	const navigateToBounty = () => {
		navigation.navigate('Bounty', {
			isGeneralQuestion: false,
			generalQuestion: '',
			history,
			medications,
			pastIllness,
			personalInfo,
			lifestyle,
			others,
		});
	};

	const onPressPrev = () => {
		if (
			input1Ref.current &&
			input2Ref.current &&
			input3Ref.current &&
			input4Ref.current &&
			input5Ref.current
		) {
			if (input2Ref.current.isFocused()) input1Ref.current.focus();
			else if (input3Ref.current.isFocused()) input2Ref.current.focus();
			else if (input4Ref.current.isFocused()) input3Ref.current.focus();
			else if (input5Ref.current.isFocused()) input4Ref.current.focus();
		}
	};

	const onPressNext = () => {
		if (
			input1Ref.current &&
			input2Ref.current &&
			input3Ref.current &&
			input4Ref.current &&
			input5Ref.current
		) {
			if (input1Ref.current.isFocused()) input2Ref.current.focus();
			else if (input2Ref.current.isFocused()) input3Ref.current.focus();
			else if (input3Ref.current.isFocused()) input4Ref.current.focus();
			else if (input4Ref.current.isFocused()) input5Ref.current.focus();
		}
	};

	const onPressDone = () => {
		if (
			input1Ref.current &&
			input2Ref.current &&
			input3Ref.current &&
			input4Ref.current &&
			input5Ref.current
		) {
			input1Ref.current.blur();
			input2Ref.current.blur();
			input3Ref.current.blur();
			input4Ref.current.blur();
			input5Ref.current.blur();
		}
	};

	return (
		<Wrapper>
			<Header
				headerRight={true}
				onPressHeaderRight={() => navigation.goBack()}
			/>
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
						placeholder:
							'Please explain how and when they started, and what bothers you the most.',
						value: history,
						onChangeText: setHistory,
						style: {
							minHeight: 88,
						},
					}}
					errorMsg={'Tell us a little more, using at least 40 characters.'}
					showError={0 < history.length && history.length < 40}
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
					label="Age and Sex (Optional)"
					inputProps={{
						placeholder: 'e.g., Mid-30s and male',
						value: personalInfo,
						onChangeText: setPersonalInfo,
					}}
				/>
				<Space height={16} />
				{/* <LabelInput
					inputRef={input5Ref}
					label="Do you have any allergies or dietary habits? and how often do you exercise? (Optional)"
					inputProps={{
						placeholder: `e.g., I've been a static vegan for 3 yrs`,
						value: lifestyle,
						onChangeText: setLifestyle,
					}}
				/>
				<Space height={16} /> */}
				<LabelInput
					inputRef={input5Ref}
					label="Do you have any specific question about your health issue? (Optional)"
					inputProps={{
						placeholder: 'e.g., Which specialist should I see?',
						value: others,
						onChangeText: setOthers,
					}}
				/>
				<Space height={32} />
				<Footnote color="#8E8E93">
					⚠️ Do not enter any personally identifiable information. Your question
					will be shared with doctors and OpenAI.
				</Footnote>
				<Space height={32} />
				<MainButton
					text={'Next'}
					onPress={navigateToBounty}
					buttonStyle={{ height: 50, marginBottom: bottom || 20 }}
					active={history.length >= 40}
				/>
			</ScrollWrapper>
			<KeyboardAccessory
				onPressPrev={onPressPrev}
				onPressNext={onPressNext}
				onPressDone={onPressDone}
			/>
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
