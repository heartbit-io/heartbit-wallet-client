import { ScrollView, StyleSheet, Text, View } from 'react-native';

import AskContent from '../../components/home/AskContent';
import React, { useState } from 'react';
import AskSubmitButton from '../../components/home/AskSubmitButton';

function Ask({ navigation }: { navigation: any }) {
	const [askContent, setAskContent] = useState('');
	return (
		<ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
			<View style={styles.columnContainerLeftSided}>
				<AskContent
					navigation={navigation}
					askContent={askContent}
					setAskContent={setAskContent}
				/>
			</View>
			<View style={styles.columnContainer}>
				<AskSubmitButton navigation={navigation} askContent={askContent} />
			</View>
		</ScrollView>
	);
}

export default Ask;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF5ED',
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: '10%',
	},
	columnContainerLeftSided: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginHorizontal: '5%',
	},
	contentArea: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
});
