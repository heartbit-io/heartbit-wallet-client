import { useContext } from 'react';
import { ActivityIndicatorContext } from 'contexts';

interface ContextProps {
	toggleActivityIndicator: (visible: boolean) => void;
}

export const useActivityIndicator = () => {
	const context: ContextProps = useContext(ActivityIndicatorContext);
	return context;
};
