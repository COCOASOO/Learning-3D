import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jhon@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {
        const userFound = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!userFound) {
          throw new Error("Usuario no encontrado");
        }

        if (userFound.password) {
          const matchPassword = await bcrypt.compare(
            credentials.password,
            userFound.password
          );
          if (!matchPassword) {
            throw new Error("Contraseña incorrecta");
          }
        }

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        // Check if user exists in the database
        let userFound = await prisma.user.findUnique({
          where: { email: user.email },
        });

        // If user doesn't exist, create it
        if (!userFound) {
          userFound = await prisma.user.create({
            data: {
              email: user.email,
              username: user.name,
            },
          });
        }

        // Continue with sign-in
        return true;
      }
      return true; // Do different verification for other providers that you might have
    },
    async session({ session, user, token }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
