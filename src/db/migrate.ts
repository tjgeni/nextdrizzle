import { migrate } from "drizzle-orm/postgres-js/migrator"
import { client, db } from "./drizzle-client"

// migration for database
const main = async () => {
  console.log("migration start 🚀🚀")
  await migrate(db, { migrationsFolder: "migration" })
  await client.end()
  console.log("migration end 🏃🏻🏃🏻")
  process.exit(0)
}

main().catch((error) => {
  console.log("any error?", error)
  process.exit(0)
})
