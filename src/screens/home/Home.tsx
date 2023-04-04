import { ScrollView, Text, View } from 'react-native';

import React from 'react';

function Home() {
	return (
		<ScrollView>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>HeartBit</Text>
			</View>
		</ScrollView>
	);
}

export default Home;
