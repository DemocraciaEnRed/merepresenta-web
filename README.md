# Me representa WebApp
## Developing

install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


# API implementation
This project uses graphQL to feed itself from the Directus API, you have the `$lib/graph-ql` directory for creating or using string querys to the API.

# Credits
app by [Mijail Cohen](https://github.com/mijaelcohen) for DemocracyOS