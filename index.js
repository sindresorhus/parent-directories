export default function parentDirectories(path = process.cwd()) {
	if (path === '/') {
		return ['/'];
	}

	const pathComponents = path.split(/[/\\]/);

	return path
		.split(/[/\\]/)
		.map((pathComponent, index) => pathComponents.slice(0, pathComponents.length - index).join('/').replace(/^$/, '/'));
}
