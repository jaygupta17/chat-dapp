// src/app/signup/page.jsx

import {
    getLoggedInUser, createAdminClient
  } from "@/appwrite/config";
  
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function signUpWithEmail(formData:any) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  const { account } = await createAdminClient();

  await account.create(ID.unique(), email, password, name);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("my-custom-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  redirect("/account");
}

  export default async function SignUpPage() {
    const user = await getLoggedInUser();
    if (user) redirect("/");
  
    return (
      <>
        <form action={signUpWithEmail}>
          <input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <input
            id="password"
            name="password"
            placeholder="Password"
            minLength={8}
            type="password"
          />
          <input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
          />
          <button type="submit">Sign up</button>
        </form>
      </>
    );
  }
  
  