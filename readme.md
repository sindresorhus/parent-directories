# parent-dirs

> Get an array of parent directories including itself

## Install

```sh
npm install parent-dirs
```

## Usage

```js
import parentDirectories from 'parent-dirs';

parentDirectories();
/*
[
	'/Users/sindresorhus/dev/parent-dirs',
	'/Users/sindresorhus/dev',
	'/Users/sindresorhus',
	'/Users',
	'/'
]
*/
```

## API

### parentDirectories(cwd)

#### cwd

Type: `string`\
Default: `process.cwd()`

The current working directory from which to generate parent paths.
