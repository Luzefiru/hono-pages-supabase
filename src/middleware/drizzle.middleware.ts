import { env } from 'hono/adapter';
import type { Context, MiddlewareHandler } from 'hono';
import { getDbInstance } from '../db/drizzle';

export const drizzleMiddleware: MiddlewareHandler = async (
  c: Context,
  next
) => {
  const { DATABASE_URL } = env(c);

  if (!DATABASE_URL) {
    throw new Error('Set your DATABASE_URL in your wrangler.toml!');
  }

  const db = await getDbInstance(DATABASE_URL);
  c.set('drizzle', db);
  await next();
};
