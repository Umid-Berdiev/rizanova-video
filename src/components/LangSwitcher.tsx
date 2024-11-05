'use client'

import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import { FiChevronDown } from 'react-icons/fi'

interface Option {
  label: string
  code: string
}

export default function LangSwitcher() {
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const options: Option[] = [
    { label: 'EN', code: 'en' }, // Native name is the same
    { label: 'RU', code: 'ru' },
    { label: 'UZ', code: 'uz' }
  ]

  const currentLocale = options.find(
    option => option.code === pathname.split('/')[1]
  )?.label

  return (
    <div className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className={`flex items-center gap-2 font-semibold text-white`}
      >
        <span>{currentLocale}</span>
        <FiChevronDown />
      </div>
      <ul
        tabIndex={0}
        className='menu dropdown-content z-50 mt-4 rounded-box bg-white p-2 shadow'
      >
        {options.map((lang: Record<string, any>) => {
          return (
            <li key={lang.code}>
              <Link
                href={`/${lang.code}/${urlSegments.join('/')}`}
                className='text-black'
              >
                {lang.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
