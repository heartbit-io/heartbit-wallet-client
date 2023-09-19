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

type Props = NativeStackScreenProps<RootStackType, 'GeneralAsk'>;

function GeneralAsk({ navigation }: Props) {
	const bottom = useSafeAreaInsets().bottom;
	const input1Ref = useRef<TextInput>(null);
	const input2Ref = useRef<TextInput>(null);
	const [generalQuestion, setGeneralQuestion] = useState('');
	const [personalInfo, setPersonalInfo] = useState('');

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => true,
		);

		return () => backHandler.remove();
	}, []);

	const navigateToBounty = () => {
		navigation.navigate('Bounty', {
			isGeneralQuestion: true,
			generalQuestion,
			personalInfo,
			history: '',
			medications: '',
			pastIllness: '',
			lifestyle: '',
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
			<Header
				headerRight={true}
				onPressHeaderRight={() => navigation.goBack()}
			/>
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
					label="Age and Sex (Optional)"
					inputRef={input2Ref}
					inputProps={{
						placeholder: 'e.g., Mid-30s and male',
						value: personalInfo,
						onChangeText: setPersonalInfo,
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
					active={generalQuestion.length >= 20}
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
