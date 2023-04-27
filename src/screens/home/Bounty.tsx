import styled from 'styled-components/native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainButton } from 'components';
import { BountyChoiceList } from './BountyChoiceList';
import { LargeTitle } from 'components/common';
import { postQuestion } from 'apis/postQuestion';
import { Alert } from 'react-native';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Bounty'>;

function Bounty({ navigation, route }: Props) {
	const [bounty, setBounty] = useState(0);
	return (
		<Wrapper>
			<Text>Set a bounty for human answers</Text>
			<BountyChoiceList bounty={bounty} setBounty={setBounty} />
			<MainButton
				onPress={async () =>
					await navigateToForum({ navigation, route }, bounty)
				}
				text={'Confirm'}
				buttonStyle={{ marginBottom: 37 }}
				active={bounty === 0 ? false : true}
			/>
		</Wrapper>
	);
}

const navigateToForum = async (
	{ navigation, route }: Props,
	bounty: number,
) => {
	bounty === 0
		? ''
		: (async () => {
				const responseDto: ResponseDto = await postQuestion(
					'test@heartbit.io', // just for test
					route.params.askContent,
					bounty,
				);
				responseDto.statusCode === 201
					? navigation.navigate('Forum', {
							askContent: route.params.askContent,
					  })
					: Alert.alert(responseDto.message, 'Try again later');
		  })();
};

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
