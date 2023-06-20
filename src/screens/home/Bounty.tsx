import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

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

// store
import { updateUserData } from 'store/slices/userSlice';

type Props = NativeStackScreenProps<RootStackType, 'Bounty'>;

function Bounty({ navigation, route }: Props) {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.user);
	const [USDPerSat, setUSDPerSat] = useState(0);
	const [bounty, setBounty] = useState(0);
	const [inputBounty, setInputBounty] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		getBtcRates().then(res => setUSDPerSat(res.data?.customSatoshi as number));
	}, []);

	const navigateHandler = (sats: number) => {
		if (sats < userData.btcBalance) {
			postQuestion({
				bountyAmount: sats,
				type: route.params.isGeneralQuestion ? 'general' : 'illness',
				content: route.params.isGeneralQuestion
					? route.params.generalQuestion
					: route.params.history,
				currentMedication: route.params.medications,
				ageSexEthnicity: route.params.personalInfo,
				pastIllnessHistory: route.params.pastIllness,
				others: route.params.others,
			})
				.then(res => {
					if (res.success && res.statusCode === 201 && res.data) {
						dispatch(
							updateUserData({ btcBalance: userData.btcBalance - sats }),
						);
						navigation.navigate('Forum', {
							question: res.data,
							isFromBountyScreen: true,
						});
					} else {
						Alert.alert(res.message, 'Try again later');
					}
				})
				.catch(res => Alert.alert(res.message, 'Try again later'));
		} else {
			Alert.alert("You don't have enough sats to post a question.");
		}
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
					onPress={() => navigateHandler(bounty || inputBounty)}
					text={'Confirm'}
					active={!!bounty || !!inputBounty}
					buttonStyle={{ marginTop: 32 }}
				/>
				<MainButton
					onPress={() => navigateHandler(0)}
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
