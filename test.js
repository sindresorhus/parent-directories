import test from 'ava';
import parentDirectories from './index.js';

test('main', t => {
	t.deepEqual(parentDirectories('/'), ['/']);
	t.deepEqual(parentDirectories('c:'), ['c:']);

	t.deepEqual(parentDirectories('/a/b/c/d'), [
		'/a/b/c/d',
		'/a/b/c',
		'/a/b',
		'/a',
		'/',
	]);

	t.deepEqual(parentDirectories('a/b/c/d'), [
		'a/b/c/d',
		'a/b/c',
		'a/b',
		'a',
	]);

	t.deepEqual(parentDirectories('c:\\a\\b\\c\\d'), [
		'c:/a/b/c/d',
		'c:/a/b/c',
		'c:/a/b',
		'c:/a',
		'c:',
	]);

	t.deepEqual(parentDirectories('c:/a/b'), [
		'c:/a/b',
		'c:/a',
		'c:',
	]);

	t.deepEqual(parentDirectories('c:\\Program Files\\Foo\\Bar Baz 99\\rainbow'), [
		'c:/Program Files/Foo/Bar Baz 99/rainbow',
		'c:/Program Files/Foo/Bar Baz 99',
		'c:/Program Files/Foo',
		'c:/Program Files',
		'c:',
	]);
});
