// actions.js
import { getSession } from "next-auth/react";

export async function getUserSession() {
  const session = await getSession();
  return session;
}
