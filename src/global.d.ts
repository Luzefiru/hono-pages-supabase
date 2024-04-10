import {} from 'hono';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props?: { title?: string; path?: string }
    ): Response;
  }

  interface Env {
    // c.var types
    Variables: {
      drizzle: PostgresJsDatabase;
    };

    // c.env types
    Bindings: {
      DATABASE_URL: string;
    };
  }
}
