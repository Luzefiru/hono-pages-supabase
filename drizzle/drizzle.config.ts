import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
  schema: './src/models/*.model.ts', // can be a glob string or a string[]
  out: './drizzle/migrations', // where the .sql files will be saved
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    connectionString: process.env.VITE_DATABASE_URL!,
  },
} satisfies Config;
