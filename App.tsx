import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Navigation from '$navigation';
import React from 'react';
import useCachedResources from '$hooks/useCachedResources';
import useColorScheme from '$hooks/useColorScheme';
import 'react-native-gesture-handler';

export default function App(): JSX.Element | null {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	}
	return (
		<SafeAreaProvider>
			<Navigation colorScheme={colorScheme} />
			<StatusBar />
		</SafeAreaProvider>
	);
}
