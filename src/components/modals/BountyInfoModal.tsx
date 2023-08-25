import React, { useState } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

// components
import { Body, Caption1, Title1 } from 'components/common';
import { MainButton } from 'components';

// assets
import Info from 'assets/img/ic_info.svg';

export function BountyInfoModal() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<InfoButton onPress={() => setModalVisible(true)}>
				<Icon source={Info} />
				<Caption1 color="#8E8E93">About tip</Caption1>
			</InfoButton>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<ModalWrapper activeOpacity={1} onPress={() => setModalVisible(false)}>
					<Container activeOpacity={1}>
						<Title1 weight="bold">How does the tip work?</Title1>
						<Body style={{ marginVertical: 32 }}>
							The bounty is money given to the doctor who answers your question.
							If you set a higher bounty, you are more likely to get a quick
							response. This is because questions with higher bounties are given
							to doctors first.
						</Body>
						<MainButton onPress={() => setModalVisible(false)} text={'OK'} />
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

const Icon = styled.Image`
	margin-right: 4px;
`;

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
