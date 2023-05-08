import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// tabs
import BottomTabs from './BottomTabs';
import { View, Text, SafeAreaView } from 'react-native';

const Drawer = createDrawerNavigator<DrawerTabTypes>();

const DrawerTabs = () => {
	return (
		<Drawer.Navigator
			drawerContent={props => <DrawerView />}
			screenOptions={{
				headerShown: false,
				drawerPosition: 'right',
				drawerType: 'front',
			}}
		>
			<Drawer.Screen name="BottomTabs" component={BottomTabs} />
		</Drawer.Navigator>
	);
};

function DrawerView() {
	return (
		<SafeAreaView>
			<View>
				<Text>Drawer View</Text>
			</View>
		</SafeAreaView>
	);
}

export default DrawerTabs;
