import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "../../../migrations/schema";

// config dotenv
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("Cannot find database url");
}

const client = postgres(process.env.DATABASE_URL || "", { max: 1 });
const db = drizzle(client, { schema });

const migrateDB = async () => {
  try {
    console.log("🟡 Migrating client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🟢 Successfully migrated");
  } catch (error) {
    console.log("🔴 Error migrating client", error);
  }
};
migrateDB();

export default db;
