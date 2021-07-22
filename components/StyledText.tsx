import * as React from 'react';
import { Text, TextProps } from '$components/Themed';

export function MonoText({ style, ...props }: TextProps): JSX.Element {
	return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
}
