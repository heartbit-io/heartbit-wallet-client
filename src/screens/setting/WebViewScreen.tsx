import React from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// components
import { Header } from 'components';

type Props = NativeStackScreenProps<RootStackType, 'WebViewScreen'>;

const WebViewScreen = ({ route }: Props) => {
	const { link } = route.params;

	return (
		<Wrapper>
			<Header headerLeft />
			<WebView source={{ uri: link }} style={{ flex: 1 }} />
		</Wrapper>
	);
};

export default WebViewScreen;

const Wrapper = styled.View`
	flex: 1;
`;
