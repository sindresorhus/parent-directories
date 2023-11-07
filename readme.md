# parent-directories

> Get an array of parent directories including itself

## Install

```sh
npm install parent-directories
```

## Usage

```js
import parentDirectories from 'parent-directories';

parentDirectories();
/*
[
	'/Users/sindresorhus/dev/parent-directories',
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
