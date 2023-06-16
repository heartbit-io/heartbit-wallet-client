import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// components
import { Body, Header, Space, Subheadline } from 'components';

// assets
import Caution from 'assets/img/alert-circle.svg';

// apis
import { deleteQuestion } from 'apis/questionApi';

type Props = NativeStackScreenProps<RootStackType, 'HealthRecord'>;

const records = [
	{ type: 'majorComplaint', title: 'Chief Complaint' },
	{ type: 'medicalHistory', title: 'Medical History' },
	{ type: 'currentMedications', title: 'Current Medication' },
	{ type: 'assessment', title: 'Assessment' },
	{ type: 'plan', title: 'Plan' },
	{ type: 'guide', title: 'Guide' },
];

const HealthRecord = ({ route, navigation }: Props) => {
	const { replies } = route.params;

	const onPressHeaderRight = () => {
		Alert.alert(
			`Are you sure you want to permanently delete this? Your question, doctor's note, and medical record will be deleted.`,
			'',
			[
				{
					text: 'Delete',
					onPress: () =>
						deleteQuestion(replies?.questionId)
							.then(res => {
								if (res.statusCode === 200) {
									Alert.alert(res.message);
									navigation.pop(2);
								}
							})
							.catch(res => Alert.alert(res.message, 'Try again later')),
				},
				{
					text: 'Cancel',
					onPress: () => {},
				},
			],
		);
	};

	return (
		<Wrapper>
			<Header
				headerLeft
				headerRight
				headerTitle="HealthRecord"
				headerRightTitle="Delete"
				onPressHeaderRight={onPressHeaderRight}
			/>
			<Container>
				<Body>
					<Body weight="bold">Date</Body>: {replies.createdAt}
				</Body>
			</Container>
			{records.map(
				el =>
					!!replies[el.type as keyof typeof replies] && (
						<Container key={el.title}>
							<Body weight="bold">{el.title}</Body>
							<Space height={26} />
							<Body>{replies[el.type as keyof typeof replies]}</Body>
						</Container>
					),
			)}
			<CautionWrapper>
				<Icon source={Caution} />
				<Space height={8} />
				<Subheadline color={'#8E8E93'}>
					Answers provided by AI and human doctors are for reference purposes
					only, not a substitute for professional medical advice, diagnosis, or
					treatment. The answers should not be considered the final medical
					opinion or legally binding for the providers involved. {'\n\n'} If you
					think you may have a medical emergency, call doctors or emergency
					services immediately. Reliance on any information AI or online doctors
					provides is solely at your own risk.
				</Subheadline>
			</CautionWrapper>
		</Wrapper>
	);
};

export default HealthRecord;

const Wrapper = styled.ScrollView`
	border-top-width: 1px;
	border-top-color: #d1d1d6;
`;

const Container = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #d1d1d6;
	padding-horizontal: 26px;
	padding-vertical: 26px;
`;

const CautionWrapper = styled.View`
	padding-top: 26px;
	padding-bottom: 50px;
	padding-horizontal: 26px;
`;

const Icon = styled.Image``;
