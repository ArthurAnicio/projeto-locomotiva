import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";
import { Poppins } from "next/font/google";
import { TrainProvider } from "@/features/contexts/TrainContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Locomotiva",
  description: "Gerenciador de Locomotivas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AppRouterCacheProvider>
          <TrainProvider>{children}</TrainProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}