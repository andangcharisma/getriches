// Prefix a root-relative path with the site's base path (e.g. /getriches on GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string) {
	return `${base}${path}`;
}
