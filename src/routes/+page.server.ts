import type { Post } from '$lib/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load({ fetch }: { fetch: any }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	return { posts };
}
