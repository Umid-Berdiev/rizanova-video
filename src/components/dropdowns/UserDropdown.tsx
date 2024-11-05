'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiMoon, BiPencil, BiSun, BiUser } from 'react-icons/bi'
import { GoSignOut } from 'react-icons/go'
import RedCheckedIcon from '../icons/RedCheckedIcon'
import SettingsIcon from '../icons/SettingsIcon'
import AppDialog from '../modals/AppDialog'

export default function UserDropdown({ locale }: { locale: string }) {
  const t = useTranslations()
  const [themeDialog, setThemeDialog] = useState<HTMLDialogElement | null>(null)
  const { setTheme, resolvedTheme, themes, theme } = useTheme()

  useEffect(() => {
    const themeDialog = document.getElementById(
      'theme-dialog'
    ) as HTMLDialogElement
    setThemeDialog(themeDialog)
  }, [])

  return (
    <>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} role='button' className='btn btn-circle'>
          <BiUser size={24} color='black' />
        </div>
        <div
          tabIndex={0}
          className='menu dropdown-content z-[1] rounded-box bg-quaternary p-2 shadow'
        >
          <div className='hdr-user-dropdown'>
            <div className='userab'>
              <img src='/images/home/acter.png' alt='' />
              <div>
                <h4>Shakhzod Ismoilov</h4>
                <p>@shakhzod.ux</p>
              </div>
            </div>
            <div className='flex gap-6'>
              <Link
                href='#'
                className='flex flex-col items-center justify-between'
              >
                <img src='/images/home/child.png' alt='' className='size-9' />
                <span>Bolalar</span>
              </Link>
              <Link
                href={`/${locale}/profile/edit`}
                className='flex flex-col items-center'
              >
                <span className='rounded-full bg-background p-2'>
                  <BiPencil size={24} />
                </span>
                <span>{t('Tahrirlash')}</span>
              </Link>
            </div>
          </div>
          <ul className='divide-y divide-[#2E2C30] text-base'>
            <li className='gap-3'>
              <Link href={`/${locale}/profile`} className='px-4 py-3'>
                <SettingsIcon />
                <span>{t('Sozlamalar')}</span>
              </Link>
            </li>
            <li className='gap-3'>
              <button
                onClick={() => themeDialog?.showModal()}
                className='px-4 py-3'
              >
                {theme === 'dark' ? <BiMoon size={24} /> : <BiSun size={24} />}
                <span>{t('Tema rangi')}</span>
              </button>
            </li>

            <li className='gap-3'>
              <button className='px-4 py-3'>
                <GoSignOut size={24} />
                <span>{t('Chiqish')}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* theme modal */}
      <AppDialog id='theme-dialog' className='bg-secondary'>
        <h3 className='font-serif text-lg font-semibold'>{t('Tema rangi')}</h3>
        <ul className='menu mt-6 w-full divide-y divide-[#2E2C30] rounded-lg bg-quaternary p-0 [&_li>*]:rounded-none'>
          <li>
            <button
              className='flex h-14 items-center justify-between px-4 py-3'
              onClick={() => setTheme('light')}
            >
              <span>{t('Oq')}</span>
              {theme === 'light' && (
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 28 28'
                    fill='none'
                  >
                    <path
                      d='M23.3327 7.5835L10.4993 20.4168L4.66602 14.5835'
                      stroke='#D13030'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              )}
            </button>
          </li>
          <li>
            <button
              className='flex h-14 items-center justify-between px-4 py-3'
              onClick={() => setTheme('dark')}
            >
              <span>{t('Qora')}</span>
              {theme === 'dark' && <RedCheckedIcon />}
            </button>
          </li>
        </ul>
      </AppDialog>
    </>
  )
}
