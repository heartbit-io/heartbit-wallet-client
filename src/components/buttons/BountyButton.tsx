import React from 'react';
import styled from 'styled-components/native';

// components
import { Body, Caption1, Footnote } from 'components/common';

// assets
import arrowRight from 'assets/img/ic_chevron.right.svg';

type Props = {
	title: string;
	USDPerSat: number;
	sats: number;
	active: boolean;
	isManual?: boolean;
	onPress: () => void;
};

const BountyButton = ({
	title,
	USDPerSat,
	sats,
	active,
	isManual,
	onPress,
}: Props) => {
	return (
		<Wrapper active={active} onPress={onPress}>
			<Footnote weight="bold" color="#3A3A3C">
				{title}
			</Footnote>
			{!isManual || (sats > 0 && isManual) ? (
				<BountyAmountContainer>
					<Body weight="bold"> {(sats * USDPerSat).toLocaleString()} USD</Body>
					<Caption1 color="#8E8E93">{sats.toLocaleString()} sats</Caption1>
				</BountyAmountContainer>
			) : (
				<Icon source={arrowRight} />
			)}
		</Wrapper>
	);
};

export default BountyButton;

const Wrapper = styled.TouchableOpacity<{ active: boolean }>`
	min-height: 64px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	border-radius: 12px;
	border-color: ${({ active }) => (active ? 'red' : 'gray')};
	border-width: ${({ active }) => (active ? '2px' : '1px')};
	margin-bottom: 8px;
	padding-horizontal: 16px;
	padding-vertical: 11px;
`;

const BountyAmountContainer = styled.View`
	align-items: flex-end;
`;

const Icon = styled.Image``;
