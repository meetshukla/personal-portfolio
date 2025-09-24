'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors hover:text-foreground ${
                  pathname === item.href
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
