import { withAuth } from "next-auth/middleware";

export default withAuth(
  function (req) {
  },
  { 
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/signin",
    },
  }
);

export const config = { matcher: ["/cart", "/profile"] };
