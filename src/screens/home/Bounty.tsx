import React, { useEffect, useState } from 'react';
import { Alert, BackHandler } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { useActivityIndicator } from 'hooks/useActivityIndicator';

// components
import { LargeTitle, Space, Subheadline } from 'components/common';
import {
	BountyButton,
	BountyModal,
	Header,
	MainButton,
	BountyInfoModal,
} from 'components';

// apis
import { postQuestion } from 'apis/questionApi';

// store
import { updateUserData } from 'store/slices/userSlice';
import { fetchLatestBtcRate } from 'store/slices/coinSlice';

type Props = NativeStackScreenProps<RootStackType, 'Bounty'>;

function Bounty({ navigation, route }: Props) {
	const { toggleActivityIndicator } = useActivityIndicator();
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector(state => state.user);
	const { USDPerSat } = useAppSelector(state => state.coin);
	const [bounty, setBounty] = useState(0);
	const [inputBounty, setInputBounty] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);
	const [isPressed, setIsPressed] = useState(false);

	useEffect(() => {
		dispatch(fetchLatestBtcRate());
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => {
				navigation.goBack();
				return true;
			},
		);

		return () => backHandler.remove();
	}, []);

	const navigateHandler = (sats: number) => {
		if (sats <= userData.btcBalance) {
			setIsPressed(true);
			toggleActivityIndicator(true);
			postQuestion({
				bountyAmount: sats,
				type: route.params.isGeneralQuestion ? 'general' : 'illness',
				content: route.params.isGeneralQuestion
					? route.params.generalQuestion
					: route.params.history,
				currentMedication: route.params.medications,
				ageSexEthnicity: route.params.personalInfo,
				pastIllnessHistory: route.params.pastIllness,
				lifestyle: route.params.lifestyle,
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
						setIsPressed(false);
						Alert.alert(res.message, 'Try again later');
					}
				})
				.catch(res => {
					setIsPressed(false);
					Alert.alert(res.message, 'Try again later');
				})
				.finally(() => toggleActivityIndicator(false));
		} else {
			setIsPressed(false);
			Alert.alert("You don't have enough balance.");
		}
	};

	return (
		<Wrapper>
			<Header headerLeft={true} headerRight={true} />
			<LargeTitle weight="bold">{`Set a tip for \na doctor's advice`}</LargeTitle>
			<BountyInfoModal />

			<BountyButton
				title="Fastest"
				USDPerSat={USDPerSat}
				sats={Math.floor(30 / USDPerSat)}
				active={bounty === Math.floor(30 / USDPerSat)}
				onPress={() => {
					setBounty(Math.floor(30 / USDPerSat));
					setInputBounty(0);
				}}
			/>
			<BountyButton
				title="Faster"
				USDPerSat={USDPerSat}
				sats={Math.floor(10 / USDPerSat)}
				active={bounty === Math.floor(10 / USDPerSat)}
				onPress={() => {
					setBounty(Math.floor(10 / USDPerSat));
					setInputBounty(0);
				}}
			/>
			<BountyButton
				title="Normal"
				USDPerSat={USDPerSat}
				sats={Math.floor(1 / USDPerSat)}
				active={bounty === Math.floor(1 / USDPerSat)}
				onPress={() => {
					setBounty(Math.floor(1 / USDPerSat));
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
					active={(!!bounty || !!inputBounty) && !isPressed}
					buttonStyle={{ marginTop: 32 }}
				/>
				<Space height={16} />
				<MainButton
					onPress={() => navigateHandler(0)}
					text={'Ask for free'}
					active={!isPressed}
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

const Wrapper = styled.ScrollView`
	flex: 1;
	flex-direction: column;
	background-color: #fff5ed;
	padding-horizontal: 25px;
`;

const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	margin-vertical: 50px;
`;
