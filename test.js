import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m('/'), ['/']);
	t.deepEqual(m('c:'), ['c:']);

	t.deepEqual(m('/a/b/c/d'), [
		'/a/b/c/d',
		'/a/b/c',
		'/a/b',
		'/a',
		'/'
	]);

	t.deepEqual(m('a/b/c/d'), [
		'a/b/c/d',
		'a/b/c',
		'a/b',
		'a'
	]);

	t.deepEqual(m('c:\\a\\b\\c\\d'), [
		'c:/a/b/c/d',
		'c:/a/b/c',
		'c:/a/b',
		'c:/a',
		'c:'
	]);

	t.deepEqual(m('c:/a/b'), [
		'c:/a/b',
		'c:/a',
		'c:'
	]);

	t.deepEqual(m('c:\\Program Files\\Foo\\Bar Baz 99\\rainbow'), [
		'c:/Program Files/Foo/Bar Baz 99/rainbow',
		'c:/Program Files/Foo/Bar Baz 99',
		'c:/Program Files/Foo',
		'c:/Program Files',
		'c:'
	]);
});
