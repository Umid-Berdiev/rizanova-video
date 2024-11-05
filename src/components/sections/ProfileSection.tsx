'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import RedCheckedIcon from '../icons/RedCheckedIcon'
import RedFacebookIcon from '../icons/RedFacebookIcon'
import RedInstagramIcon from '../icons/RedInstagramIcon'
import RedTelegramIcon from '../icons/RedTelegramIcon'
import RedYoutubeIcon from '../icons/RedYoutubeIcon'
import AppDialog from '../modals/AppDialog'

export default function ProfileSection({ locale }: { locale: string }) {
  const [themeDialog, setThemeDialog] = useState<HTMLDialogElement | null>(null)
  const [phoneDialog, setPhoneDialog] = useState<HTMLDialogElement | null>(null)
  const t = useTranslations()
  const { setTheme, resolvedTheme, themes, theme } = useTheme()

  useEffect(() => {
    const themeDialog = document.getElementById(
      'theme-dialog'
    ) as HTMLDialogElement
    setThemeDialog(themeDialog)

    const phoneDialog = document.getElementById(
      'phone-dialog'
    ) as HTMLDialogElement
    setPhoneDialog(phoneDialog)
  }, [])

  return (
    <>
      <section className='profile-section'>
        <div className='wrapper-sm'>
          <div className='flex flex-col items-center'>
            <img src='/images/profile/user.png' alt='' className='size-20' />
            <h3 className='mt-3 font-serif text-lg font-semibold'>
              Shakhzod Ismoilov
            </h3>
            <p className='text-content-tertiary'>@shakhzod.ux</p>
          </div>
          <div className='list-block mt-6'>
            <div className='item'>
              <img src='/images/profile/child.svg' alt='' />
              <div className='text'>
                <h5>Bolalar</h5>
                <p>12+</p>
              </div>
            </div>
            <a href='profile-edit.html' className='item'>
              <svg
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='36' height='36' rx='18' fill='#18171A' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M11.293 21.619L21.619 11.293C22.009 10.903 22.642 10.903 23.032 11.293L24.708 12.969C25.098 13.359 25.098 13.992 24.708 14.382L14.381 24.707C14.194 24.895 13.94 25 13.675 25H11V22.325C11 22.06 11.105 21.806 11.293 21.619Z'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M19.75 13.1602L22.84 16.2502'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='text'>
                <h5>Tahrirlash</h5>
              </div>
            </a>
          </div>
          <a href='balance.html' className='balance'>
            <h5>{t('Sizning balansingiz')}</h5>
            <h3>20 000 {t("so'm")}</h3>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z'
                fill='white'
              />
              <path
                d='M18 24L22 20L18 16'
                stroke='#0D0D0D'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <div className='arbitrary-wrapper'>
            <div className='arbitary-main'>
              <h5>{t('Kontent sozlamalari')}</h5>
              <a href='#' className='item'>
                {t("Oxirgi ko'rilganlar")}
              </a>
              <a href='quality.html' className='item'>
                {t('Video sifati')}
              </a>
            </div>
            <div className='arbitary-main'>
              <h5>{t('Akkaunt sozlamalari')}</h5>
              <button
                className='item w-full'
                onClick={() => phoneDialog?.showModal()}
              >
                {t("Telefon nomerni o'zgartirish")}
              </button>
              <a href='profile-delete.html' className='item'>
                {t("Akkaunti o'chirish")}
              </a>
            </div>

            <div className='arbitary-main'>
              <a
                href='#'
                data-toggle='modal'
                data-target='#myModalPromocode'
                className='item'
              >
                {t('Promo kodni kiritish')}
              </a>
              <a href='dislikes.html' className='item'>
                {t("Dislayklarni ko'rish")}
              </a>
            </div>
            <div className='arbitary-main'>
              <h5>{t('Ilova sozlamalari')}</h5>
              <a
                href='#'
                data-toggle='modal'
                data-target='#myModalLanguage'
                className='item'
              >
                {t("Tilni o'zgartirish")}
              </a>
              <button
                className='item w-full'
                onClick={() => themeDialog?.showModal()}
              >
                {t('Tema rangi')}
              </button>
              <a href='#' className='item'>
                {t('Bildirishnomalar')}
              </a>
            </div>

            <div className='arbitary-main'>
              <h5>{t('Yordam')}</h5>
              <a href='faq.html' className='item'>
                {t('Tez-tez beriladigan savollar')}
              </a>
              <a
                href='#'
                data-toggle='modal'
                data-target='#myModalContactUs'
                className='item'
              >
                {t("Biz bilan bog'lanish")}
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h4 className='font-serif'>{t("Bizga obuna bo'ling")}</h4>
            <div className='mt-4 flex gap-3'>
              <button className='flex flex-col items-center gap-1'>
                <RedYoutubeIcon />
                <p className='text-xs text-content-tertiary'>YouTube</p>
              </button>
              <button className='flex flex-col items-center gap-1'>
                <RedInstagramIcon />
                <p className='text-xs text-content-tertiary'>Instagram</p>
              </button>
              <button className='flex flex-col items-center gap-1'>
                <RedTelegramIcon />
                <p className='text-xs text-content-tertiary'>Telegram</p>
              </button>
              <button className='flex flex-col items-center gap-1'>
                <RedFacebookIcon />
                <p className='text-xs text-content-tertiary'>Facebook</p>
              </button>
            </div>
          </div>
        </div>
      </section>

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

      {/* phone number update modal */}
      <AppDialog id='phone-dialog' className='bg-secondary'>
        <h3 className='font-serif text-lg font-semibold'>
          {t('Telefon nomerni o’zgartirish')}
        </h3>
        <form action='#' className='form-style'>
          <label htmlFor='phone'>{t('Telefon nomer')}</label>
          <ReactInputMask
            className='phone-mask'
            name='username'
            mask='+\9\98 99 999 99 99'
            maskPlaceholder={''}
            placeholder='+998 00 000 00 00'
          />
        </form>
      </AppDialog>
    </>
  )
}
