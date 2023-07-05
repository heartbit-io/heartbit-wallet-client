import React, { useState } from 'react';
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
	const [history, setHistory] = useState('');
	const [medications, setMedications] = useState('');
	const [pastIllness, setPastIllness] = useState('');
	const [personalInfo, setPersonalInfo] = useState('');
	const [others, setOthers] = useState('');

	const navigateToBounty = () => {
		navigation.navigate('Bounty', {
			isGeneralQuestion: false,
			generalQuestion: '',
			history,
			medications,
			pastIllness,
			personalInfo,
			others,
		});
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
					label="What medication do you currently take? (Optional)"
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
				<Space height={30} />
			</ScrollWrapper>
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
