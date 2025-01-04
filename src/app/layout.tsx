import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { RootLayoutContent } from "@/components/RootLayoutContent";
import "./globals.css";
import "@fontsource/crimson-pro"
import "@fontsource/lora"
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonPro = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/crimson-pro/files/crimson-pro-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/crimson-pro/files/crimson-pro-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-crimson-pro',
})

export const metadata: Metadata = {
  title: "Parigoriá - Mental Health Support Community",
  description: "A virtual haven for mental health support, offering education and professional therapy to people of all ages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `,
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootLayoutContent>{children}</RootLayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
