import * as React from 'react';

import { ReactNativeDimensionsToolkitViewProps } from './ReactNativeDimensionsToolkit.types';

export default function ReactNativeDimensionsToolkitView(props: ReactNativeDimensionsToolkitViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
