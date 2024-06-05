import { cache } from "react";
import db from "./drizzle";

// use to get our datas from drizzle

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});
