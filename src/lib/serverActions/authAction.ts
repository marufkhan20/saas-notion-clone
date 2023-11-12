"use server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { z } from "zod";
import { FormSchema } from "../types";

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = createRouteHandlerClient({
    cookies,
  });
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response;
}
