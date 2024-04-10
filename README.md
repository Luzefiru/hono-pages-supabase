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
