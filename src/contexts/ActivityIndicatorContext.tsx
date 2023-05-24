import React, { createContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';

interface ActivityIndicatorInterface {
	toggleActivityIndicator: (loading: boolean) => void;
	loadableVisible: boolean;
}

export const ActivityIndicatorContext =
	createContext<ActivityIndicatorInterface>({
		toggleActivityIndicator: () => {},
		loadableVisible: false,
	});

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

export const ActivityIndicatorProvider: React.FC<Props> = ({ children }) => {
	const [visible, toggleActivityIndicator] = useState<boolean>(false);
	return (
		<ActivityIndicatorContext.Provider
			value={{ loadableVisible: visible, toggleActivityIndicator }}
		>
			{children}
			<ActivityIndicator />
		</ActivityIndicatorContext.Provider>
	);
};
