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


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
