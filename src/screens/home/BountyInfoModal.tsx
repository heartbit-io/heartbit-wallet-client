import {
	Animated,
	useWindowDimensions,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import {
	Body,
	Caption1,
	Footnote,
	Subheadline,
	Title1,
} from 'components/common';
import { MainButton } from 'components';

export function BountyInfoModal() {
	const [modalVisible, setModalVisible] = useState(false);

	const { height } = useWindowDimensions();

	const modalPop = useRef(new Animated.Value(height)).current;

	const showModal = () => {
		setModalVisible(true);
		Animated.timing(modalPop, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const hideModal = () => {
		Animated.timing(modalPop, {
			toValue: height,
			duration: 300,
			useNativeDriver: true,
		}).start(() => {
			setModalVisible(false);
		});
	};

	return (
		<>
			<InfoButton onPress={showModal}>
				<InfoLogo source={require('../../assets/img/ic_info.png')} />
				<InfoText> About bounty</InfoText>
			</InfoButton>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={hideModal}
			>
				<ModalWrapper>
					<AnimationWrapper>
						<TextWrapper>
							<TitleText>How does the bounty work?</TitleText>
							<BodyText>
								A bounty goes to the doctor who writes the answer to your
								question. {'\n\n'}
								Since higher-bounty questions are assigned to doctors first, the
								higher you set the bounty, the more likely you are to get a
								response quickly.
							</BodyText>
							<MainButton
								onPress={hideModal}
								text={'OK'}
								buttonStyle={{ marginBottom: 30 }}
							/>
						</TextWrapper>
					</AnimationWrapper>
				</ModalWrapper>
			</Modal>
		</>
	);
}

const InfoButton = styled.TouchableOpacity`
	flex: 1;
	flex-direction: row;
	margin-top: 20px;
	margin-bottom: 57px;
	width: 100px;
`;

const InfoLogo = styled.Image`
	width: 18px;
	height: 18px;
`;

const InfoText = styled(Caption1)`
	color: #8e8e93;
`;

const ModalWrapper = styled.View`
	flex: 1;
	justify-content: flex-end;
	background-color: #000000bf;
`;

const AnimationWrapper = styled(Animated.View)`
	background-color: #fff5ed;
	border-radius: 40px;
	margin: 6px;
`;

const TextWrapper = styled.View`
	margin-horizontal: 32px;
	margin-top: 40px;
`;

const TitleText = styled(Title1)`
	font-weight: bold;
`;

const BodyText = styled(Body)`
	margin-vertical: 32px;
`;
