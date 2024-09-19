import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";

// We can pass the providers like this if we use any other names in env file
/* 
    NextAuth({
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
    ]
  })
*/
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GoogleProvider, GithubProvider, TwitterProvider]
})