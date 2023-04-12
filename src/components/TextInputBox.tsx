import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';

import React from 'react';
import { scale, verticalScale, fontSizeScale } from '../styles/responsive-size';

function TextInputBox({
	text,
	setText,
	placeHolder,
	onSubmitEditing,
}: {
	text: string;
	setText: Function;
	placeHolder: string;
	onSubmitEditing?: any;
}) {
	return (
		<KeyboardAvoidingView behavior="padding">
			<TextInput
				style={styles.textInput}
				returnKeyType="go"
				multiline={false}
				blurOnSubmit
				onChangeText={(text: string) => setText(text)}
				onSubmitEditing={onSubmitEditing}
				placeholder={placeHolder}
			></TextInput>
		</KeyboardAvoidingView>
	);
}

export default TextInputBox;

const styles = StyleSheet.create({
	textInput: {
		flex: 1,
		width: scale(358),
		height: verticalScale(50),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderWidth: scale(1),
		borderColor: '#D1D1D6',
		textAlign: 'center',
		borderRadius: scale(14),
		fontSize: fontSizeScale(17),
	},
});
