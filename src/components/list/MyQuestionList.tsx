import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// components
import { Footnote, Headline, Subheadline } from 'components/common';

// hooks
import { getQuestionList } from 'apis/questionApi';
import { useNavigation } from '@react-navigation/native';

const MyQuestionList = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackType>>();

	const [questions, setQuestions] = useState<GetQuestionResponse[]>([
		{
			id: 0,
			userId: 0,
			content: '',
			bountyAmount: 0,
			status: '',
			updatedAt: '',
			createdAt: '',
		},
	]);
	useEffect(() => {
		(async () => {
			try {
				const responseDto: ResponseDto<GetQuestionResponse[]> =
					await getQuestionList(20, 0);
				setQuestions(responseDto.data as GetQuestionResponse[]);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	const renderItemHandler = ({ item }: { item: GetQuestionResponse }) => {
		return (
			<ItemWrapper
				onPress={() =>
					navigation.navigate('Forum', {
						questionId: item.id,
						bountyAmount: item.bountyAmount,
						askContent: item.content,
						createdAt: item.createdAt,
					})
				}
			>
				<RowWrapper>
					<HeadlineText numberOfLines={1}>{item.content}</HeadlineText>
				</RowWrapper>
				<SubheadlineText>
					{moment(item.createdAt).format('D MMM YYYY ・ ') + item.bountyAmount}{' '}
					sats
				</SubheadlineText>
			</ItemWrapper>
		);
	};

	const renderEmptyComponent = () => {
		return (
			<Footnote style={{ textAlign: 'center', marginTop: 50 }}>
				There is no any questions
			</Footnote>
		);
	};

	return (
		<StyledFlatList
			data={questions}
			renderItem={renderItemHandler}
			ListEmptyComponent={renderEmptyComponent()}
			stickyHeaderIndices={[]}
			marginTop={0}
		/>
	);
};

export default MyQuestionList;

const StyledFlatList = styled.FlatList<{ marginTop: number }>`
	margin-top: ${({ marginTop }) => marginTop}px;
`;

const ItemWrapper = styled.TouchableOpacity`
	border-bottom-width: 0.5px;
	border-bottom-color: rgba(60, 60, 67, 0.36);
	padding-vertical: 15px;
	margin-horizontal: 16px;
`;

const SubheadlineText = styled(Subheadline)`
	color: #8e8e93;
	margin-top: 8px;
`;

const HeadlineText = styled(Headline)`
	font-weight: bold;
	margin-top: 8px;
`;

const RowWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
