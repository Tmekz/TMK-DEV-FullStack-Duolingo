import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

export default db;

// async function getData() {
//   const sql = neon(process.env.DATABASE_URL!);
//   const response = await sql`SELECT version()`;
//   return response[0].version;
// }

// export default async function Page() {
//   const data = await getData();
//   return <>{data}</>;
// }
