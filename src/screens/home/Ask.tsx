import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from 'react-native';

import React, { useState } from 'react';

function Ask({ navigation }: { navigation: any }) {
	const [question, setQuestion] = useState('');
	const questionHandler = (question: string) => {
		setQuestion(question);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.columnContainer}>
				<Text style={styles.veryBigText}>What do you want to ask?</Text>
				<KeyboardAvoidingView
					behavior={Platform.select({ ios: 'padding', android: undefined })}
					style={styles.contentArea}
				>
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
				</KeyboardAvoidingView>
			</View>
		</SafeAreaView>
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
		margin: '5%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	rowContainer: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contentArea: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	veryBigText: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: '#FFF5ED',
		textAlign: 'left',
		fontSize: 28,
	},
});
