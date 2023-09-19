import React from 'react';
import { InputAccessoryView, Button } from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import styled from 'styled-components/native';

// components
import Space from './Space';

// utils
import { OS } from 'utils/utility';

type Props = {
	onPressPrev: () => void;
	onPressNext: () => void;
	onPressDone: () => void;
};

const KeyboardAccessory = ({
	onPressPrev,
	onPressNext,
	onPressDone,
}: Props) => {
	if (OS === 'ios') {
		return (
			<InputAccessoryView nativeID={'labelInput'}>
				<InputAccessoryWrapper>
					<PrevNextWrapper>
						<Button onPress={onPressPrev} title="Prev" />
						<Space width={5} />
						<Button onPress={onPressNext} title="Next" />
					</PrevNextWrapper>
					<Button onPress={onPressDone} title="Done" />
				</InputAccessoryWrapper>
			</InputAccessoryView>
		);
	} else {
		return (
			<KeyboardAccessoryView androidAdjustResize>
				<InputAccessoryWrapper>
					<PrevNextWrapper>
						<Btn onPress={onPressPrev}>
							<Text>Prev</Text>
						</Btn>
						<Space width={5} />
						<Btn onPress={onPressNext}>
							<Text>Next</Text>
						</Btn>
					</PrevNextWrapper>
					<Btn onPress={onPressDone}>
						<Text>Done</Text>
					</Btn>
				</InputAccessoryWrapper>
			</KeyboardAccessoryView>
		);
	}
};

export default KeyboardAccessory;

const InputAccessoryWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	background-color: #f4f4f4;
	border-top-width: ${OS === 'ios' ? 1 : 0}px;
	border-top-color: #c7c7cc;
	padding-horizontal: 10px;
`;

const PrevNextWrapper = styled.View`
	flex-direction: row;
`;

const Btn = styled.TouchableOpacity`
	padding-vertical: 8px;
	padding-horizontal: 8px;
`;

const Text = styled.Text`
	font-family: Pretendard-Regular;
	font-size: 17px;
	color: #007aff;
`;
