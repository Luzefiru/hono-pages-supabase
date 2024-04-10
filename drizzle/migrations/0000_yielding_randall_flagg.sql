CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"description" text,
	"completed" boolean,
	"due_date" date
);
