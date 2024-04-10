import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const getDbInstance = async (
  DATABASE_URL: string
): Promise<PostgresJsDatabase> => {
  if (!DATABASE_URL) {
    throw new Error('Set your DATABASE_URL in your wrangler.toml!');
  }

  const client = postgres(DATABASE_URL, { prepare: false });
  const db = drizzle(client);

  return db;
};
