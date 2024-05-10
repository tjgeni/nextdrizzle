CREATE TABLE IF NOT EXISTS "car" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"type" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
