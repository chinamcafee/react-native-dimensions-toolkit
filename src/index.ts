import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeDimensionsToolkit.web.ts
// and on native platforms to ReactNativeDimensionsToolkit.ts
import ReactNativeDimensionsToolkitModule from './ReactNativeDimensionsToolkitModule';
import ReactNativeDimensionsToolkitView from './ReactNativeDimensionsToolkitView';
import { ChangeEventPayload, ReactNativeDimensionsToolkitViewProps } from './ReactNativeDimensionsToolkit.types';

interface ScreenSize {
  width: number;
  height: number;
}

// Get the native constant value.
export const PI = ReactNativeDimensionsToolkitModule.PI;

export function hello(): string {
  return ReactNativeDimensionsToolkitModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeDimensionsToolkitModule.setValueAsync(value);
}

export function getRealScreenSize():ScreenSize  {
  return ReactNativeDimensionsToolkitModule.getRealScreenSize();
}

const emitter = new EventEmitter(ReactNativeDimensionsToolkitModule ?? NativeModulesProxy.ReactNativeDimensionsToolkit);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeDimensionsToolkitView, ReactNativeDimensionsToolkitViewProps, ChangeEventPayload };
