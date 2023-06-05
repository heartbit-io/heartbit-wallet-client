import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppSelector } from 'hooks/hooks';

// components
import { LargeTitle, Subheadline } from 'components/common';
import {
	BountyButton,
	BountyModal,
	Header,
	MainButton,
	BountyInfoModal,
} from 'components';

// apis
import { postQuestion } from 'apis/questionApi';
import { getBtcRates } from 'apis/coinApi';

type Props = NativeStackScreenProps<RootStackType, 'Bounty'>;

function Bounty({ navigation, route }: Props) {
	const { userData } = useAppSelector(state => state.user);
	const [USDPerSat, setUSDPerSat] = useState(0);
	const [bounty, setBounty] = useState(0);
	const [inputBounty, setInputBounty] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		getBtcRates().then(res => setUSDPerSat(res.data?.customSatoshi as number));
	}, []);

	const navigateHandler = async ({ navigation, route }: Props) => {
		// (async () => {
		// 	const responseDto: ResponseDto<CreateQuestionResponse> =
		// 		await postQuestion(route.params.askContent, bounty);
		// 	responseDto.statusCode === 201
		// 		? navigation.navigate('Forum', {
		// 				questionId: (responseDto.data as CreateQuestionResponse).id,
		// 				bountyAmount: (responseDto.data as CreateQuestionResponse)
		// 					.bountyAmount,
		// 				askContent: route.params.askContent,
		// 		  })
		// 		: Alert.alert(responseDto.message, 'Try again later');
		// })();
	};

	return (
		<Wrapper>
			<Header headerLeft={true} headerRight={true} />
			<LargeTitle weight="bold">Set a bounty for faster answer</LargeTitle>
			<BountyInfoModal />

			<BountyButton
				title="Faster"
				USDPerSat={USDPerSat}
				sats={10000}
				active={bounty === 10000}
				onPress={() => {
					setBounty(10000);
					setInputBounty(0);
				}}
			/>
			<BountyButton
				title="Normal"
				USDPerSat={USDPerSat}
				sats={1000}
				active={bounty === 1000}
				onPress={() => {
					setBounty(1000);
					setInputBounty(0);
				}}
			/>
			<BountyButton
				title="Set manually"
				USDPerSat={USDPerSat}
				sats={inputBounty}
				active={inputBounty > 0}
				isManual={true}
				onPress={() => setModalVisible(true)}
			/>

			<Footer>
				<Subheadline color="#3A3A3C">
					Balance: {userData?.btcBalance.toLocaleString()} sats
				</Subheadline>
				<MainButton
					onPress={async () => await navigateHandler({ navigation, route })}
					text={'Confirm'}
					active={!!bounty || !!inputBounty}
					buttonStyle={{ marginTop: 32 }}
				/>
				<MainButton
					onPress={async () => {
						setBounty(0);
						await navigateHandler({ navigation, route });
					}}
					text={'Continue without setting a bounty'}
					active={true}
					buttonStyle={{ backgroundColor: 'transparent', marginTop: 8 }}
					textStyle={{ color: '#f68f2a' }}
				/>
			</Footer>

			<BountyModal
				visible={modalVisible}
				USDPerSat={USDPerSat}
				closeModal={() => setModalVisible(false)}
				setBounty={(val: number) => {
					setModalVisible(false);
					setBounty(0);
					setInputBounty(val);
				}}
			/>
		</Wrapper>
	);
}

export default Bounty;

const Wrapper = styled.View`
	flex: 1;
	flex-direction: column;
	background-color: #fff5ed;
	padding-horizontal: 25px;
`;

const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 50px;
`;
