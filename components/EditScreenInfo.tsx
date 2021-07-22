import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '$components/StyledText';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '$components/Themed';
import Colors from '$constants/Colors';

const styles = StyleSheet.create({
	codeHighlightContainer: {
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: 'center',
	},
	helpContainer: {
		alignItems: 'center',
		marginHorizontal: 20,
		marginTop: 15,
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		textAlign: 'center',
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
});

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}

export default function EditScreenInfo({ path }: { path: string }): JSX.Element {
	return (
		<View>
			<View style={styles.getStartedContainer}>
				<Text style={styles.getStartedText} lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
					Open up the code for this screen:
				</Text>

				<View
					style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
					darkColor='rgba(255,255,255,0.05)'
					lightColor='rgba(0,0,0,0.05)'>
					<MonoText>{path}</MonoText>
				</View>

				<Text style={styles.getStartedText} lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
					Change any of the text, save the file, and your app will automatically update.
				</Text>
			</View>

			<View style={styles.helpContainer}>
				<TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
					<Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
						Tap here if your app doesn&apos;t automatically update after making changes
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
