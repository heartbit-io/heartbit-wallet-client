import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

// components
import { Headline, Subheadline } from 'components/common';

type Props = {
	question: QuestionResponse;
};

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const QuestionListItem = ({ question }: Props) => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	const getDateFormatted = (createdAt?: string) => {
		return createdAt === undefined || createdAt === ''
			? moment().format('MMM D YYYY')
			: moment(createdAt).format('MMM D YYYY');
	};

	return (
		<QuestionWrapper
			onPress={() =>
				navigation.navigate('Forum', {
					question: question,
					isFromBountyScreen: false,
				})
			}
		>
			<TextHeadline numberOfLines={1}>{question.content}</TextHeadline>
			<SpaceWrapper>
				<Subheadline color="#8E8E93">
					{getDateFormatted(question.createdAt)} ・{' '}
					{question.bountyAmount.toLocaleString()} sats
				</Subheadline>
				<Subheadline color="#007AFF">
					{question.status === 'Closed' ? 'Got answered ✓' : ''}
				</Subheadline>
			</SpaceWrapper>
		</QuestionWrapper>
	);
};

export default QuestionListItem;

const SpaceWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const QuestionWrapper = styled.TouchableOpacity`
	flex-direction: column;
	justify-content: center;
	border-bottom-width: 0.5px;
	border-color: #bdbdbd;
	padding-vertical: 15px;
	margin-horizontal: 16px;
`;

const TextHeadline = styled(Headline)`
	font-weight: bold;
	margin-bottom: 8px;
	margin-right: 10px;
`;
