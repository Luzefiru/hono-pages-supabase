To test the server using wrangler locally:

```bash
npm install
npm run build
npm run preview
```

To deploy to a Cloudflare worker:

```bash
npm run deploy
```

### Notes

1. The `.env` only works on local development. In order to make it work on your Cloudflare deployment, you'll have to set the environment bindings inside your Cloudflare Pages project dashboard.
2. For every library that depends on `node:`, we have to include them in our `vite.config.ts` `ssr.external` array of packages to make it compatible with Cloudflare Pages.

- We have to add the `nodejs_compat` compatibility flag to our project dashboard `Settings > Functions` page as well.
