'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { BiSearch } from 'react-icons/bi'
import LangSwitcher from './LangSwitcher'
import UserDropdown from './dropdowns/UserDropdown'
import BellDotIcon from './icons/BellDotIcon'

interface Props {
  locale: string
}


export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const pathname = usePathname()

  const isHomepage = ( pathname === '/ru'|| pathname === '/en' ||pathname === '/uz' );
  console.log('pathname', pathname);

  return (
    <>
      {!(
        pathname?.startsWith(`/${locale}/auth`) ||
        pathname?.startsWith(`/${locale}/player`)
      ) && (
          <header className={isHomepage ? 'absoluty' : ''}>
            <div className='wrapper'>
              <a href={`/${locale}`} className='logo'>
                <img src='/images/auth/logo.svg' alt='' />
              </a>
              <ul className='list-menu ml-auto'>
                <li>
                  <a href='#'>Bosh sahifa</a>
                </li>
                <li>
                  <a href='#'>Kinolar</a>
                </li>
                <li>
                  <a href='#'>Seriallar</a>
                </li>
                <li>
                  <a href='#'>Primyera</a>
                </li>
                <li>
                  <a href='mediateka.html' className='active'>
                    Mediateka
                  </a>
                </li>
              </ul>
              {!pathname?.startsWith(`/${locale}/users`) && (
                <div className='right-block gap-2'>
                  <form action='#' className='search-block mx-4'>
                    <button type='submit'>
                      <BiSearch size={24} />
                    </button>
                    <input type='text' required placeholder='Search ...' />
                  </form>

                  <LangSwitcher />

                  <button className='btn btn-circle btn-ghost'>
                    <BellDotIcon />
                  </button>

                  <UserDropdown locale={locale} />

                  <div className='hamburger open-sidebar'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5 17H19M5 12H19M5 7H19'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </header>
        )}

      <div className='mobile-menu lg:hidden'>
        <div className='mobile-menu-body'>
          <form action='#' className='search-block'>
            <button type='submit'>
              <BiSearch />
            </button>
            <input type='text' required placeholder='Search ...' />
          </form>
          <ul className='list-menu'>
            <li>
              <a href='#'>Bosh sahifa</a>
            </li>
            <li>
              <a href='#'>Kinolar</a>
            </li>
            <li>
              <a href='#'>Seriallar</a>
            </li>
            <li>
              <a href='#'>Primyera</a>
            </li>
            <li>
              <a href='mediateka.html' className='active'>
                Mediateka
              </a>
            </li>
          </ul>
        </div>
        <div className='close-mobile-menu'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.99982 9.41415L13.6568 15.0711C13.8454 15.2533 14.098 15.3541 14.3602 15.3518C14.6224 15.3495 14.8732 15.2444 15.0586 15.059C15.2441 14.8736 15.3492 14.6227 15.3515 14.3606C15.3538 14.0984 15.253 13.8458 15.0708 13.6571L9.41382 8.00015L15.0708 2.34315C15.253 2.15455 15.3538 1.90194 15.3515 1.63975C15.3492 1.37755 15.2441 1.12674 15.0586 0.941331C14.8732 0.755923 14.6224 0.650754 14.3602 0.648475C14.098 0.646197 13.8454 0.746991 13.6568 0.929149L7.99982 6.58615L2.34282 0.929149C2.15337 0.751494 1.90224 0.654515 1.64255 0.658732C1.38287 0.662948 1.13502 0.768031 0.951433 0.951743C0.76785 1.13546 0.662943 1.38339 0.65891 1.64307C0.654877 1.90276 0.752034 2.15382 0.929823 2.34315L6.58582 8.00015L0.928823 13.6571C0.833313 13.7494 0.757131 13.8597 0.704722 13.9817C0.652313 14.1037 0.624727 14.235 0.623573 14.3677C0.622419 14.5005 0.647721 14.6322 0.698001 14.7551C0.748282 14.878 0.822535 14.9897 0.916428 15.0835C1.01032 15.1774 1.12197 15.2517 1.24487 15.302C1.36777 15.3523 1.49944 15.3776 1.63222 15.3764C1.765 15.3752 1.89622 15.3477 2.01823 15.2953C2.14023 15.2428 2.25058 15.1667 2.34282 15.0711L7.99982 9.41415Z'
              fill='white'
            />
          </svg>
        </div>
      </div>

      <div
        className='fade myModalTheme outSite modal'
        id='myModalSignOut'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='myModalMovieLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <svg
              className='signOutSvg'
              width='56'
              height='56'
              viewBox='0 0 56 56'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='56' height='56' rx='28' fill='#FF4343' />
              <path
                d='M24.4336 27.9998L41.3336 27.9998'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M26.1072 41.3015L19.1605 41.3332C17.1688 41.3432 15.5488 39.7465 15.5488 37.7748L15.5488 18.2248C15.5488 16.2598 17.1572 14.6665 19.1438 14.6665L26.3338 14.6665'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M34.666 34.6668L41.3327 28.0002L34.666 21.3335'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <h3>Akkauntdan chiqishga aminmisiz?</h3>
            <p>
              Akkauntga qayta kirish uchun qaytadan login qilishingizga to’g’ri
              keladi
            </p>
            <button
              data-dismiss='modal'
              className='btn-custom btn-more'
              type='button'
            >
              Fikrimdan qaytdim
            </button>
            <button
              data-dismiss='modal'
              className='btn-custom btn-red'
              type='button'
            >
              Akkauntdan chiqish
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
