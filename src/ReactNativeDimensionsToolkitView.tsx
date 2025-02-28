import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeDimensionsToolkitViewProps } from './ReactNativeDimensionsToolkit.types';

const NativeView: React.ComponentType<ReactNativeDimensionsToolkitViewProps> =
  requireNativeViewManager('ReactNativeDimensionsToolkit');

export default function ReactNativeDimensionsToolkitView(props: ReactNativeDimensionsToolkitViewProps) {
  return <NativeView {...props} />;
}
