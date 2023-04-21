import styled from 'styled-components/native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainButton } from 'components';

import { BountyChoiceList } from './BountyChoiceList';
import { LargeTitle } from 'components/common';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Bounty'>;

function Bounty({ navigation }: Props) {
	const [bounty, setBounty] = useState(0);
	return (
		<Wrapper>
			<Text>Set a bounty for human answers</Text>
			<BountyChoiceList bounty={bounty} setBounty={setBounty} />
			<MainButton
				onPress={() => navigation.navigate('Forum')}
				text={'Confirm'}
				buttonStyle={{ marginBottom: 37 }}
			/>
		</Wrapper>
	);
}

export default Bounty;

const Text = styled(LargeTitle)`
	font-weight: bold;
`;

const Wrapper = styled.View`
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding-horizontal: 25px;
	background-color: #fff5ed;
`;
