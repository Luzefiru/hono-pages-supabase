import { createServerClient } from '@supabase/ssr';
import type { MiddlewareHandler } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import { env } from 'hono/adapter';
import { Context } from 'hono';

export const supabaseMiddleware: MiddlewareHandler = async (
  c: Context,
  next
) => {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = env(c);

  const url = import.meta.env.PROD
    ? SUPABASE_URL ?? ''
    : import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.PROD
    ? SUPABASE_ANON_KEY ?? ''
    : import.meta.env.VITE_SUPABASE_ANON_KEY;

  const client = createServerClient(url, anonKey, {
    cookies: {
      get: (key: string) => {
        return getCookie(c, key);
      },
      set: (key: string, value: any, options: object) => {
        setCookie(c, key, value, options);
      },
      remove: (key: string, options: object) => {
        deleteCookie(c, key, options);
      },
    },
    cookieOptions: {
      httpOnly: true,
      secure: true,
    },
  });
  c.set('supabase', client);
  await next();
};
