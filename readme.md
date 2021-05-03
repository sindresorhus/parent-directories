# parent-dirs

> Get an array of parent directories including itself

## Install

```
$ npm install parent-dirs
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

Directory starting point to return paths from.
