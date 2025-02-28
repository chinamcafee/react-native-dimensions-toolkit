# react-native-dimensions-toolkit

A native toolkit of getting correct device screen dimension, including foldable devices close and open screen.

## Installation

```sh
npm install react-native-dimensions-toolkit
```

## Usage
The result contains {width, height}, which is the current device screen dimension

```js
import { getScreenSize } from 'react-native-dimensions-toolkit';

// ...

const result = await getScreenSize();
```