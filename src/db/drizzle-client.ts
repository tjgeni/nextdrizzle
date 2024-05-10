import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import "dotenv/config"

const connectionString = process.env.DATABASE_URL as string
export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)
