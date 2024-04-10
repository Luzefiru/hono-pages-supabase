import { pgTable, serial, text, boolean, date } from 'drizzle-orm/pg-core';
export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: text('title'),
  description: text('description'),
  completed: boolean('completed'),
  due_date: date('due_date'),
});
