import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL('https://chea-ilong.vercel.app'),
  title: "Chea Ilong | Software Engineer",
  description: "Portfolio website for Chea Ilong, Software Engineer specializing in full-stack development, React, Next.js, and modern web technologies. Based in Phnom Penh, Cambodia.",
  keywords: "Chea Ilong, Software Engineer, Full Stack Developer, React, Next.js, TypeScript, JavaScript, Web Development, Cambodia, Phnom Penh",
  authors: [{ name: "Chea Ilong", url: "https://github.com/Chea-Ilong" }],
  creator: "Chea Ilong",
  publisher: "Chea Ilong",
  generator: 'Next.js',
  openGraph: {
    title: "Chea Ilong | Software Engineer",
    description: "Portfolio website for Chea Ilong, Software Engineer specializing in full-stack development, React, Next.js, and modern web technologies.",
    url: "https://chea-ilong.vercel.app",
    siteName: "Chea Ilong Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/porfile.jpg",
        width: 1200,
        height: 630,
        alt: "Chea Ilong - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chea Ilong | Software Engineer",
    description: "Portfolio website for Chea Ilong, Software Engineer specializing in full-stack development, React, Next.js, and modern web technologies.",
    creator: "@cheailong",
    images: ["/porfile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chea-ilong.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-white dark:bg-[#1F1D1B] text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
