/**
Get an array of parent directories including itself.

@param cwd - The current working directory from which to generate parent paths.
@returns An array of parent directories as strings.

@example
```
import parentDirectories from 'parent-dirs';

parentDirectories();
// [
// 	'/Users/sindresorhus/dev/parent-dirs',
// 	'/Users/sindresorhus/dev',
// 	'/Users/sindresorhus',
// 	'/Users',
// 	'/'
// ]
```
*/
export default function parentDirectories(cwd?: string): string[];
