import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { prisma } from "../../../src/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  throw new Error(
    "Please define GITHUB_ID and GITHUB_SECRET environment variables"
  );
}

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub ?? "error";
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
