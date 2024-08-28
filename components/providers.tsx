"use client";

import React, { ReactNode } from "react";
import { CartProvider as UsProvider } from "use-shopping-cart";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <UsProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_URL as string}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/cancel"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </UsProvider>
  );
}
