import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from 'react-native';

import React, { useState } from 'react';
import AskSubmitButton from './AskSubmitButton';
import { fontSizeScale } from '../../styles/responsive-size';

function AskContent({
	navigation,
	askContent,
	setAskContent,
}: {
	navigation: any;
	askContent: string;
	setAskContent: Function;
}) {
	return (
		<>
			<Text style={styles.veryBigText}>What do you want to ask?</Text>
			<TextInput
				textAlign="center"
				returnKeyType="go"
				multiline={true}
				blurOnSubmit
				onChangeText={question => setAskContent(question)}
				onSubmitEditing={async () => {
					try {
						navigation.navigate('Bounty');
					} catch (e) {}
				}}
				style={styles.input}
				placeholder="Write here"
			/>
		</>
	);
}

export default AskContent;

const styles = StyleSheet.create({
	veryBigText: {
		fontSize: fontSizeScale(34),
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: '#FFF5ED',
		textAlign: 'left',
		fontSize: fontSizeScale(28),
	},
});
