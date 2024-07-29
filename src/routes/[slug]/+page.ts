import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		error(404, `couldn't find ${params.slug}`);
		console.log(err);
	}
}
