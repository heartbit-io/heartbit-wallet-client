import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// assets
import logo from 'assets/logo/logo.svg';
import empty from 'assets/img/ic_empty_recent_q.png';
import menu from 'assets/img/ic_menu.svg';
import sat from 'assets/img/ic_sat.png';

// components
import {
	Body,
	Callout,
	Gradient,
	Headline,
	MainButton,
	Subheadline,
	Title1,
} from 'components';
import { getQuestionList } from 'apis/questionApi';

import moment from 'moment';
import { useAppSelector } from 'hooks/hooks';
import { DrawerActions } from '@react-navigation/native';

// utils
import { OS } from 'utils/utility';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Home'>;

function Home({ navigation }: Props) {
	const statusBarHeight = useSafeAreaInsets().top;
	const { userData } = useAppSelector(state => state.user);
	const [questions, setQuestions] = useState<GetQuestionResponse[]>([]);
	const getDateFormatted = (createdAt?: string) => {
		return createdAt === undefined || createdAt === ''
			? moment().format('MMM D YYYY')
			: moment(createdAt).format('MMM D YYYY');
	};

	useEffect(() => {
		(async () => {
			try {
				const responseDto: ResponseDto<GetQuestionResponse[]> =
					await getQuestionList(10, 0);
				setQuestions(responseDto.data as GetQuestionResponse[]);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<Gradient>
			<HeaderWrapper statusBarHeight={statusBarHeight}>
				<Satoshi>
					<SatoshiIcon source={sat} />
					<TextCallout> {userData?.btcBalance.toLocaleString()}</TextCallout>
				</Satoshi>
				<ButtonWrapper
					onPress={() => {
						navigation.dispatch(DrawerActions.openDrawer());
					}}
				>
					<BurgerIcon source={menu} />
				</ButtonWrapper>
			</HeaderWrapper>
			<ScrollView>
				<Wrapper>
					<Logo source={logo} />
					<MainButton
						text={'Ask doctors anything'}
						onPress={() => navigation.navigate('Ask')}
						buttonStyle={{ marginTop: 95 }}
					/>
				</Wrapper>
				<WrapperNotCenter>
					{questions === undefined || questions?.length === 0 ? (
						<EmptyWrapper>
							<Empty source={empty} />
							<TextSubHeadline>
								Get your first health consultation from doctors all over the
								world
							</TextSubHeadline>
						</EmptyWrapper>
					) : (
						<RecentWrapper>
							<SpaceWrapper>
								<TextTitle>Recent</TextTitle>
								<ButtonWrapper
									onPress={() => navigation.navigate('MyQuestions')}
								>
									<TextBody>See all {'>'}</TextBody>
								</ButtonWrapper>
							</SpaceWrapper>
							{questions?.map(question => {
								return (
									<QuestionWrapper>
										<TextHeadline numberOfLines={1}>
											{question.content}
										</TextHeadline>
										<SpaceWrapper>
											<TextSubHeadlineGray>
												{getDateFormatted(question.createdAt)} ・{' '}
												{question.bountyAmount.toLocaleString()} sats
											</TextSubHeadlineGray>
											<TextSubHeadlineBlue>
												{question.status === 'Open' ? '' : 'Got answered ✓'}
											</TextSubHeadlineBlue>
										</SpaceWrapper>
									</QuestionWrapper>
								);
							})}
						</RecentWrapper>
					)}
				</WrapperNotCenter>
			</ScrollView>
		</Gradient>
	);
}

export default Home;

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	padding-top: 121px;
	padding-horizontal: 25px;
`;
const WrapperNotCenter = styled.View`
	flex: 1;
	padding-top: 64px;
`;

const HeaderWrapper = styled.View<{ statusBarHeight: number }>`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: ${() => (OS === 'ios' ? 44 : 56)}px;
	margin-top: ${({ statusBarHeight }) => statusBarHeight}px;
	margin-horizontal: 16px;
`;

const ButtonWrapper = styled.TouchableOpacity``;

const Satoshi = styled.View`
	flex-direction: row;
	height: 36px;
	width: 124px;
	border-radius: 8px;
	background: #ffffff66;
	justify-content: space-between;
	align-items: center;
`;

const SatoshiIcon = styled.Image`
	margin-left: 6px;
`;

const BurgerIcon = styled.Image``;

const TextCallout = styled(Callout)`
	margin-right: 12px;
`;

const Logo = styled.Image``;

const EmptyWrapper = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Empty = styled.Image``;

const RecentWrapper = styled.View`
	flex-direction: column;
	margin-horizontal: 16px;
`;
const SpaceWrapper = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const QuestionWrapper = styled.View`
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 82px;
	border-bottom-width: 0.5px;
	border-color: #bdbdbd;
`;

const TextBody = styled(Body)`
	color: gray;
	margin-bottom: 16px;
`;
const TextTitle = styled(Title1)`
	font-weight: bold;
	color: gray;
	margin-bottom: 16px;
`;
const TextHeadline = styled(Headline)`
	font-weight: bold;
	margin-bottom: 8px;
`;
const TextSubHeadlineGray = styled(Subheadline)`
	color: gray;
`;
const TextSubHeadlineBlue = styled(Subheadline)`
	color: #007aff;
`;
const TextSubHeadline = styled(Subheadline)`
	margin-top: 40px;
	margin-horizontal: 70px;
	margin-bottom: 166px;
`;
