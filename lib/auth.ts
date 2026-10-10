import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI?.trim();
if (!uri) throw new Error("MONGODB_URI is not set");

const client = new MongoClient(uri);
const db = client.db();

const baseURL = (process.env.BETTER_AUTH_URL || "http://localhost:3000").trim();

const googleId = process.env.GOOGLE_CLIENT_ID?.trim();
const googleSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
const githubId = process.env.GITHUB_CLIENT_ID?.trim();
const githubSecret = process.env.GITHUB_CLIENT_SECRET?.trim();

const google =
  googleId && googleSecret
    ? { clientId: googleId, clientSecret: googleSecret }
    : undefined;

const github =
  githubId && githubSecret
    ? { clientId: githubId, clientSecret: githubSecret }
    : undefined;

export const auth = betterAuth({
  baseURL,
  secret: process.env.BETTER_AUTH_SECRET?.trim(),
  database: mongodbAdapter(db),
  trustedOrigins: [
    baseURL,
    "http://localhost:3000",
    "https://b14-a7-bazar-dor-six.vercel.app",
    "https://*.vercel.app",
  ],
  emailAndPassword: {
    enabled: true,
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["github", "google"],
    },
  },
  socialProviders: {
    ...(google ? { google } : {}),
    ...(github ? { github } : {}),
  },
});