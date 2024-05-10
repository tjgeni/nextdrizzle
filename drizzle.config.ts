import type { Config } from "drizzle-kit"

export default {
  schema: "./src/db/schema.ts",
  out: "./migration",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
} satisfies Config
