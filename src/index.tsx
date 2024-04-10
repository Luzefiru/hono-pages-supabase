import { Hono, Context, Env } from 'hono';
import { renderer } from './renderer';
import { supabaseMiddleware } from './middleware/drizzle';
import { tasks } from './models/tasks.model';

const app = new Hono();

app.use(supabaseMiddleware);
app.use(renderer);

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>);
});

// Need to type the context for intellisense
app.get('/tasks', async (c: Context<Env>) => {
  const allTasks = await c.var.drizzle.select().from(tasks);

  return c.json(allTasks);
});

export default app;
