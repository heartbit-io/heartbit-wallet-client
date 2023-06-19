import React, { useState } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

// components
import { Body, Caption1, Title1 } from 'components/common';
import { MainButton } from 'components';

// assets
import Info from 'assets/img/ic_info.svg';

type Props = {
	onPressOK: () => void;
};

export function BountyInfoModal({ onPressOK }: Props) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<InfoButton onPress={() => setModalVisible(true)}>
				<Icon source={Info} />
				<Caption1 color="#8E8E93"> About bounty</Caption1>
			</InfoButton>
			<Modal animationType="fade" transparent={true} visible={modalVisible}>
				<ModalWrapper activeOpacity={1} onPress={() => setModalVisible(false)}>
					<Container activeOpacity={1}>
						<Title1 weight="bold">How does the bounty work?</Title1>
						<Body style={{ marginVertical: 32 }}>
							A bounty goes to the doctor who writes the answer to your
							question. {'\n\n'}
							Since higher-bounty questions are assigned to doctors first, the
							higher you set the bounty, the more likely you are to get a
							response quickly.
						</Body>
						<MainButton
							onPress={() => {
								setModalVisible(false);
								onPressOK();
							}}
							text={'OK'}
						/>
					</Container>
				</ModalWrapper>
			</Modal>
		</>
	);
}

const InfoButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 57px;
`;

const Icon = styled.Image``;

const ModalWrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: flex-end;
	background-color: #000000bf;
`;

const Container = styled.TouchableOpacity`
	background-color: #fff5ed;
	border-radius: 40px;
	margin: 6px;
	padding-top: 40px;
	padding-bottom: 30px;
	padding-horizontal: 32px;
`;
