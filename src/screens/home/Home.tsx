import React, { useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import RecentQuestionList from '../../components/home/RecentQuestionList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
// assets
import logo from 'assets/logo/logo.svg';

// components
import { Gradient, MainButton } from 'components';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Home'>;

function Home({ navigation }: Props) {
	return (
		<Gradient>
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
					<RecentQuestionList />
				</WrapperNotCenter>
			</ScrollView>
		</Gradient>
	);
}

export default Home;

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	padding-top: 191px;
	padding-horizontal: 25px;
`;
const WrapperNotCenter = styled.View`
	flex: 1;
	padding-top: 64px;
`;

const Logo = styled.Image``;
