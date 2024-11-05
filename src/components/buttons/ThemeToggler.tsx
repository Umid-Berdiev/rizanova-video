'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

export default function ThemeToggler() {
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // New state to control dropdown visibility
  const { setTheme, resolvedTheme, themes, theme } = useTheme()

  return (
    <div className='relative inline-block text-left'>
      <button
        type='button'
        className='btn btn-ghost'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'dark' ? <BiMoon /> : <BiSun />}
      </button>
    </div>
  )
}
