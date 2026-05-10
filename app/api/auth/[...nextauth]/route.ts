import connect from "libs/config";
import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";
import GoogleProviders from "next-auth/providers/google";
import { compare } from "bcryptjs";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    // jwt: {
    //   secret: process.env.JWT_SECRET,
    //   encryption: true,
    // },
    // maxAge: 30 * 24 * 60 * 60, // 30 day
  },
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        // console.log("cre>>", credentials);

        let [res]: any = await connect.execute(
          "SELECT * FROM customer WHERE username = ? ",
          [credentials?.username]
        );

        const userLogin = await res[0];
        //console.log(userLogin.password, userLogin.username, userLogin.email);
        const passwordCorrect = await compare(
          credentials?.password || "",
          userLogin.password
        );
        //console.log(passwordCorrect);
        if (passwordCorrect) {
          return {
            id: userLogin.id,
            name: userLogin.custname,
            email: userLogin.email,
            image: userLogin.avatar,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ session, token, user }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
