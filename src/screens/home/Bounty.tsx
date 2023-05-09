import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header, MainButton } from 'components';
import { BountyInfoModal } from './BountyInfoModal';
import { Modal, KeyboardAvoidingView } from 'react-native';

import {
	LargeTitle,
	Body,
	Caption1,
	Footnote,
	Subheadline,
	Title3,
} from 'components/common';
import { postQuestion } from 'apis/questionApi';
import { Alert } from 'react-native';
import { useAppSelector } from 'hooks/hooks';
import { getBtcRates } from 'apis/coinApi';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Bounty'>;

function Bounty({ navigation, route }: Props) {
	const [bounty, setBounty] = useState(0);
	const [USDPerSat, setUSDPerSat] = useState(0);
	const [isManual, setIsManual] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	const { userData } = useAppSelector(state => state.user);

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

	useEffect(() => {
		(async () => {
			try {
				const responseDto: ResponseDto<ExchangeRateResponse> =
					await getBtcRates();
				setUSDPerSat(responseDto.data?.customSatoshi as number);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<ScrollWrapper>
			<Header headerLeft={true} headerRight={true} />
			<Text>Set a bounty for consultation</Text>
			<BountyInfoModal />
			<BountyButton10000
				bounty={bounty}
				onPress={() => {
					setIsManual(false);
					setBounty(10000);
				}}
			>
				<BountyTextBold>
					High: <BountyText>Likely get answered faster</BountyText>
				</BountyTextBold>
				<BountyAmountContainer>
					<BountySatoshiText>10,000 sats</BountySatoshiText>
					<BountyUSDText>
						{(10000 * USDPerSat).toLocaleString(undefined, {
							maximumFractionDigits: 2,
						})}{' '}
						USD
					</BountyUSDText>
				</BountyAmountContainer>
			</BountyButton10000>
			<BountyButton1000
				bounty={bounty}
				onPress={() => {
					setIsManual(false);
					setBounty(1000);
				}}
			>
				<BountyTextBold>Medium</BountyTextBold>
				<BountyAmountContainer>
					<BountySatoshiText>1,000 sats</BountySatoshiText>
					<BountyUSDText>
						{(1000 * USDPerSat).toLocaleString(undefined, {
							maximumFractionDigits: 2,
						})}{' '}
						USD
					</BountyUSDText>
				</BountyAmountContainer>
			</BountyButton1000>
			<BountyButtonManual
				bounty={bounty}
				onPress={() => {
					setModalVisible(true);
				}}
			>
				<BountyTextBold>Set manually</BountyTextBold>
				<BountyAmountContainer>
					{isManual === true ? (
						<>
							<BountySatoshiText>
								{bounty.toLocaleString()} sats
							</BountySatoshiText>
							<BountyUSDText>
								{(bounty * USDPerSat).toLocaleString(undefined, {
									maximumFractionDigits: 2,
								})}{' '}
								USD
							</BountyUSDText>
						</>
					) : (
						<BalanceText>{'>'}</BalanceText>
					)}
				</BountyAmountContainer>
			</BountyButtonManual>
			<Modal animationType="slide" transparent={true} visible={modalVisible}>
				<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
					<Wrapper
						onPress={() => {
							setBounty(0);
							setModalVisible(false);
						}}
						activeOpacity={1}
					>
						<Container>
							<RowWrapper>
								<Title3 weight="bold">Set amount for bounty</Title3>
							</RowWrapper>
							<InputWrapper>
								<Input
									value={bounty.toLocaleString()}
									onChangeText={bounty =>
										setBounty(Number(bounty.replace(/,/g, '')))
									}
									keyboardType="numeric"
									autoFocus
								/>
								<Subheadline>sats</Subheadline>
							</InputWrapper>
							<BountyMinimumText>
								Bounty must be at least 1,000 sats
							</BountyMinimumText>
							<MainButton
								text="Confirm"
								onPress={() => {
									setIsManual(true);
									setModalVisible(false);
								}}
								active={modalVisible === true && bounty >= 1000 ? true : false}
								buttonStyle={{ borderRadius: 8 }}
							/>
						</Container>
					</Wrapper>
				</KeyboardAvoidingView>
			</Modal>
			<BalanceWrapper>
				<BalanceText>
					Balance: {userData?.btcBalance.toLocaleString()} sats
				</BalanceText>
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

const BountyMinimumText = styled(Caption1)`
	color: #ff3b30;
	margin-bottom: 8px;
	text-align: center;
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

const Wrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.75);
`;

const Container = styled.View`
	background-color: #fff5ed;
	padding-top: 19px;
	padding-bottom: 16px;
	padding-horizontal: 16px;
`;

const RowWrapper = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 32px;
`;

const InputWrapper = styled.TouchableOpacity`
	height: 48px;
	flex-direction: row;
	align-items: center;
	border-bottom-width: 2px;
	border-bottom-color: #ff2d55;
	margin-bottom: 16px;
	padding-horizontal: 12px;
	margin-horizontal: 32px;
`;

const Input = styled.TextInput`
	flex: 1;
	height: 100%;
	text-align: right;
	margin-right: 12px;
	font-size: 34px;
	font-family: 'Pretendard-Regular';
`;
