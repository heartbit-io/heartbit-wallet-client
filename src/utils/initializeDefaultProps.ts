import { Text, TextInput, Alert } from 'react-native';

interface TextWithDefaultProps extends Text {
	defaultProps?: { allowFontScaling?: boolean };
}

interface TextInputWithDefaultProps extends TextInput {
	defaultProps?: { allowFontScaling?: boolean };
}

interface AlertWithDefaultProps extends Alert {
	defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
	(Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
	false;

(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
	(TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(
	TextInput as unknown as TextInputWithDefaultProps
).defaultProps!.allowFontScaling = false;

(Alert as unknown as AlertWithDefaultProps).defaultProps =
	(Alert as unknown as AlertWithDefaultProps).defaultProps || {};
(Alert as unknown as AlertWithDefaultProps).defaultProps!.allowFontScaling =
	false;
