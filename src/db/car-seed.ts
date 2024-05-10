import { db } from "./drizzle-client"
import { car } from "./schema"

const main = async () => {
  console.log("seed started 🌱🌱🌱")
  await db.insert(car).values({
    name: "Odong-odong",
    type: "Sedan",
  })
  console.log("seed ended 🌳🌳🌳")
  process.exit(0)
}

main().catch((error) => {
  console.log("any error?", error)
  process.exit(0)
})
