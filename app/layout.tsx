import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/layout/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meet Shukla - Software Developer',
  description: 'Software developer with 3+ years of experience building full stack and backend systems. Skilled in microservices, cloud infrastructure, and AI tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
