import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";
import { TrainProvider } from "@/features/Train/contexts/TrainContext";


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
      <body>
        <AppRouterCacheProvider>
          <TrainProvider>{children}</TrainProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}