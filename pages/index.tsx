// @generated: @expo/next-adapter@3.0.1
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
	},
});

export default function App(): JSX.Element {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
		</View>
	);
}
