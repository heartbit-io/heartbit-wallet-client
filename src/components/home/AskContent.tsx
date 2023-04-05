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
import AskSubmit from './AskSubmit';

function AskContent({ navigation }: { navigation: any }) {
	const [question, setQuestion] = useState('');
	const questionHandler = (question: string) => {
		setQuestion(question);
	};

	return (
		<>
			<TextInput
				textAlign="center"
				returnKeyType="go"
				multiline={true}
				blurOnSubmit
				onChangeText={question => questionHandler(question)}
				onSubmitEditing={async () => {
					try {
						navigation.navigate('Bounty');
						console.log(question);
					} catch (e) {}
				}}
				style={styles.input}
				placeholder="Write here"
			/>
			<AskSubmit navigation={navigation} question={question} />
		</>
	);
}

export default AskContent;

const styles = StyleSheet.create({
	veryBigText: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: '#FFF5ED',
		textAlign: 'left',
		fontSize: 28,
		margin: '3%',
	},
});
