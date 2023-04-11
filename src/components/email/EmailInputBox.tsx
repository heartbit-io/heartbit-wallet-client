import React from 'react';
import TextInputBox from '../TextInputBox';

function EmailInputBox({
	email,
	setEmail,
}: {
	email: string;
	setEmail: Function;
}) {
	return (
		<TextInputBox
			text={email}
			setText={setEmail}
			placeHolder={'Your email address'}
		/>
	);
}

export default EmailInputBox;
