import { Animated, useWindowDimensions, Modal, StyleSheet } from 'react-native';
import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';

type Props = {
	childButton: ReactElement;
	childContent: ReactElement;
	modalStyle?: ViewStyle;
};

const MainModal = ({ childButton, childContent, modalStyle }: Props) => {
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
			{React.cloneElement(childButton, { showModal, hideModal })}
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={hideModal}
			>
				<ModalWrapper>
					<AnimationWrapper style={modalStyle}>
						{React.cloneElement(childContent, { showModal, hideModal })}
					</AnimationWrapper>
				</ModalWrapper>
			</Modal>
		</>
	);
};

export default MainModal;

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
