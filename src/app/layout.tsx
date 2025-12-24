import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { TrainProvider } from "@/features/Train/contexts/TrainContext";

export const metadata: Metadata = {
  title: "Locomotiva",
  description: "Gerenciador de Locomotivas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <TrainProvider>{children}</TrainProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

