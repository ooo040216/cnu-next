import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "@/context/UserContext";
import "./globals.css";

const geistSans = Geist({
@@ -27,7 +28,9 @@ export default function RootLayout({
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
