// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// Add types for document.startViewTransition ambiently for implicit use in the entire project. See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types- for more info.
/// <reference types="view-transitions-api-types" />

// Add this declaration at the top of your file or in a separate .d.ts file
interface Document {
	startViewTransition?: (callback: () => void | Promise<void>) => void;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
