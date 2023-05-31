import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import { Home, Wallet } from 'screens';

// utils
import { OS } from 'utils/utility';

const Tab = createBottomTabNavigator<BottomTabTypes>();

const Icons = [
	{
		active: require('assets/img/ic_home_selected.svg'),
		inactive: require('assets/img/ic_home_unselected.svg'),
	},
	{
		active: require('assets/img/ic_wallet_selected.svg'),
		inactive: require('assets/img/ic_wallet_unselected.svg'),
	},
];

const BottomTabs = () => {
	const renderTabBarIcon =
		(i: number) =>
		({ focused }: { focused: boolean }) =>
			<Image source={focused ? Icons[i].active : Icons[i].inactive} />;

	const renderTabBarLabel =
		(label: string) =>
		({ focused }: { focused: boolean }) =>
			<Text focused={focused}>{label}</Text>;

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerTitle: '',
				headerShown: false,
				headerShadowVisible: false,
				headerStyle: { backgroundColor: '#FFF5ED' },
				tabBarStyle: {
					height: OS === 'ios' ? 85 : 60,
					paddingBottom: OS === 'ios' ? 30 : 10,
					paddingTop: 7,
					borderTopWidth: 0.5,
					borderColor: 'rgba(60, 60, 67, 0.36)',
					elevation: 0,
					backgroundColor: 'rgba(255, 255, 255, 0.8);',
				},
			})}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: renderTabBarIcon(0),
					tabBarLabel: renderTabBarLabel('Home'),
				}}
			/>
			<Tab.Screen
				name="Wallet"
				component={Wallet}
				options={{
					tabBarIcon: renderTabBarIcon(1),
					tabBarLabel: renderTabBarLabel('Wallet'),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabs;

const Image = styled.Image``;

const Text = styled.Text<{ focused: boolean }>`
	font-size: 10px;
	font-family: 'Pretendard-Regular';
	font-weight: 500;
	color: ${({ focused }) => (focused ? '#FF2D55' : '#8E8E93')};
	text-align: center;
	margin-top: 4px;
`;
