import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { getDbInstance } from '../src/db/drizzle';
const db = await getDbInstance(process.env.VITE_DATABASE_URL!);
await migrate(db, { migrationsFolder: './drizzle/migrations' });
// You have to manually CTRL + C this script
