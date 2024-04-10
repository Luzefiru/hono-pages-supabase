import build from '@hono/vite-cloudflare-pages';
import devServer from '@hono/vite-dev-server';
import adapter from '@hono/vite-dev-server/cloudflare';
import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    external: ['postgres'], // added as per suggestion by Yusukebe: https://github.com/orgs/honojs/discussions/2456#discussioncomment-9057286
  },
  plugins: [
    build(),
    devServer({
      adapter,
      entry: 'src/index.tsx',
    }),
  ],
});
