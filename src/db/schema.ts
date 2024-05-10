import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const car = pgTable("car", {
  id: serial("id").primaryKey(),
  name: text("full_name").notNull(),
  type: text("type").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
})
