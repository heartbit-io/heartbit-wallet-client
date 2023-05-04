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

	const navigateToForum = async ({ navigation, route }: Props) => {
		(async () => {
			const responseDto: ResponseDto<CreateQuestionResponse> =
				await postQuestion(route.params.askContent, bounty);
			responseDto.statusCode === 201
				? navigation.navigate('Forum', {
						questionId: (responseDto.data as CreateQuestionResponse).id,
						bountyAmount: (responseDto.data as CreateQuestionResponse)
							.bountyAmount,
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
			<BountyButtonManual
				bounty={bounty}
				onPress={() => {
					setBounty(100);
				}}
			>
				<BountyTextBold>Set manually</BountyTextBold>
				<BountyAmountContainer>
					<BountySatoshiText>? sats</BountySatoshiText>
					<BountyUSDText>? USD</BountyUSDText>
				</BountyAmountContainer>
			</BountyButtonManual>
			<BalanceWrapper>
				<BalanceText>Balance: 2,393,042 sats</BalanceText>
			</BalanceWrapper>
			<MainButton
				onPress={async () => await navigateToForum({ navigation, route })}
				text={'Confirm'}
				active={bounty === 0 ? false : true}
			/>
			<SkipWrapper>
				<SkipButton
					onPress={async () => {
						setBounty(0);
						await navigateToForum({ navigation, route });
					}}
				>
					<SkipText>Skip</SkipText>
				</SkipButton>
			</SkipWrapper>
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

const BountyButtonManual = styled.TouchableOpacity<{ bounty?: number }>`
	flex: 1;
	flex-direction: row;
	width: 100%;
	height: 64px;
	align-items: center;
	justify-content: center;
	border-color: ${({ bounty }) =>
		bounty != 0 && bounty != 1000 && bounty != 10000 ? 'red' : 'gray'};
	background-color: white;
	border-width: ${({ bounty }) =>
		bounty != 0 && bounty != 1000 && bounty != 10000 ? '2px' : '1px'};
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

const SkipWrapper = styled.View`
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 22px;
	margin-top: 22px;
	margin-bottom: 64px;
`;

const SkipButton = styled.TouchableOpacity`
	width: 35px;
	height: 22px;
	align-items: center;
	justify-content: center;
`;

const SkipText = styled(Body)`
	font-weight: bold;
`;
