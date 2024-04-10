import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from 'hono/adapter';
import type { Context, MiddlewareHandler } from 'hono';

export const supabaseMiddleware: MiddlewareHandler = async (
  c: Context,
  next
) => {
  const { DATABASE_URL } = env(c);

  if (!DATABASE_URL) {
    throw new Error('Set your DATABASE_URL in your wrangler.toml!');
  }

  const connectionString = import.meta.env.PROD
    ? DATABASE_URL
    : import.meta.env.VITE_DATABASE_URL;

  // Disable prefetch as it is not supported for "Transaction" pool mode
  const client = postgres(connectionString, { prepare: false });
  const db = drizzle(client);
  c.set('drizzle', db);
  await next();
};
