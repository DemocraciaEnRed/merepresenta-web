import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: node(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		hostHeader: 'X-Forwarded-Host',
		vite: {
			optimizeDeps: {
			  include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
			}
			// plugins: []
		  }
	},
};

export default config;
