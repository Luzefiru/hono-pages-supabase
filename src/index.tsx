import { Hono, Context, Env } from 'hono';
import { renderer } from './renderer';
import { supabaseMiddleware } from './middleware/supabase';

const app = new Hono();

app.use(supabaseMiddleware);
app.use(renderer);

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>);
});

// Need to type the context for intellisense
app.get('/tasks', async (c: Context<Env>) => {
  const { data: tasks, error } = await c.var.supabase.from('tasks').select();

  if (error) {
    throw error;
  }

  return c.json(tasks);
});

export default app;
