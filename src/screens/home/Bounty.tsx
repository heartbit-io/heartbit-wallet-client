import styled from 'styled-components/native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header, MainButton } from 'components';
import { BountyInfoModal } from './BountyInfoModal';
import {
	LargeTitle,
	Body,
	Caption1,
	Footnote,
	Subheadline,
} from 'components/common';
import { postQuestion } from 'apis/questionApi';
import { Alert } from 'react-native';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Bounty'>;

function Bounty({ navigation, route }: Props) {
	const [bounty, setBounty] = useState(0);

	const navigateToForum = async (
		{ navigation, route }: Props,
		bounty: number,
	) => {
		bounty === 0
			? ''
			: (async () => {
					const responseDto: ResponseDto<CreateQuestionResponse> =
						await postQuestion(route.params.askContent, bounty);
					responseDto.statusCode === 201
						? navigation.navigate('Forum', {
								questionId: responseDto.data?.id,
								bountyAmount: responseDto.data?.bountyAmount,
								askContent: route.params.askContent,
						  })
						: Alert.alert(responseDto.message, 'Try again later');
			  })();
	};

	return (
		<ScrollWrapper>
			<Header headerLeft={true} headerRight={true} />
			<Text>Set a bounty for consultation</Text>
			<BountyInfoModal />
			<BountyButton10000
				bounty={bounty}
				onPress={() => {
					setBounty(10000);
				}}
			>
				<BountyTextBold>
					High: <BountyText>Likely get answered faster</BountyText>
				</BountyTextBold>
				<BountyAmountContainer>
					<BountySatoshiText>10,000 sats</BountySatoshiText>
					<BountyUSDText>2.85 USD</BountyUSDText>
				</BountyAmountContainer>
			</BountyButton10000>
			<BountyButton1000
				bounty={bounty}
				onPress={() => {
					setBounty(1000);
				}}
			>
				<BountyTextBold>Medium</BountyTextBold>
				<BountyAmountContainer>
					<BountySatoshiText>1,000 sats</BountySatoshiText>
					<BountyUSDText>0.28 USD</BountyUSDText>
				</BountyAmountContainer>
			</BountyButton1000>
			<BountyButton100
				bounty={bounty}
				onPress={() => {
					setBounty(100);
				}}
			>
				<BountyTextBold>
					Low: <BountyText>Likely get answered slower</BountyText>
				</BountyTextBold>
				<BountyAmountContainer>
					<BountySatoshiText>100 sats</BountySatoshiText>
					<BountyUSDText>0.03 USD</BountyUSDText>
				</BountyAmountContainer>
			</BountyButton100>
			<BalanceWrapper>
				<BalanceText>Balance: 2,393,042 sats</BalanceText>
			</BalanceWrapper>
			<MainButton
				onPress={async () =>
					await navigateToForum({ navigation, route }, bounty)
				}
				text={'Confirm'}
				buttonStyle={{ marginBottom: 50 }}
				active={bounty === 0 ? false : true}
			/>
		</ScrollWrapper>
	);
}

export default Bounty;

const Text = styled(LargeTitle)`
	font-weight: bold;
`;

const ScrollWrapper = styled.ScrollView`
	flex: 1;
	flex-direction: column;
	background-color: #fff5ed;
	padding-horizontal: 25px;
`;

const BountyText = styled(Footnote)`
	font-weight: normal;
`;

const BountyTextBold = styled(Footnote)`
	font-weight: bold;
	margin-left: 16px;
`;

const BountySatoshiText = styled(Body)`
	font-weight: bold;
	margin-top: 11px;
	margin-bottom: 4px;
`;

const BountyUSDText = styled(Caption1)`
	color: #8e8e93;
	margin-bottom: 11px;
`;

const BountyAmountContainer = styled.View`
	flex: 1;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	margin-right: 16px;
`;

const BountyButton10000 = styled.TouchableOpacity<{ bounty?: number }>`
	flex: 1;
	flex-direction: row;
	width: 100%;
	height: 64px;
	align-items: center;
	justify-content: center;
	border-color: ${({ bounty }) => (bounty === 10000 ? 'red' : 'gray')};
	background-color: white;
	border-width: ${({ bounty }) => (bounty === 10000 ? '2px' : '1px')};
	border-radius: 12px;
	margin-bottom: 8px;
`;

const BountyButton1000 = styled.TouchableOpacity<{ bounty?: number }>`
	flex: 1;
	flex-direction: row;
	width: 100%;
	height: 64px;
	align-items: center;
	justify-content: center;
	border-color: ${({ bounty }) => (bounty === 1000 ? 'red' : 'gray')};
	background-color: white;
	border-width: ${({ bounty }) => (bounty === 1000 ? '2px' : '1px')};
	border-radius: 12px;
	margin-bottom: 8px;
`;

const BountyButton100 = styled.TouchableOpacity<{ bounty?: number }>`
	flex: 1;
	flex-direction: row;
	width: 100%;
	height: 64px;
	align-items: center;
	justify-content: center;
	border-color: ${({ bounty }) => (bounty === 100 ? 'red' : 'gray')};
	background-color: white;
	border-width: ${({ bounty }) => (bounty === 100 ? '2px' : '1px')};
	border-radius: 12px;
`;

const BalanceText = styled(Subheadline)`
	color: #8e8e93;
`;

const BalanceWrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 144px;
	margin-bottom: 32px;
`;
