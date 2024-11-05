'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import PlayIcon from '../icons/PlayIcon'
import MovieModal from '../modals/MovieModal'

export default function HomeHero({ locale }: { locale: string }) {
  const t = useTranslations()
  const [movieModal, setMovieModal] = useState<HTMLDialogElement | null>(null)

  const apiData = {
    title:
      '2001-yil 11-sentabr erta tongda “Oʻzbekiston havo yoʻllari” aviakompaniyasiga tegishli Boeing 757 samolyoti haqidagi film. '
  }

  useEffect(() => {
    const movieModal = document.getElementById(
      'movie-modal'
    ) as HTMLDialogElement
    setMovieModal(movieModal)
  }, [])

  return (
    <>
      <section className='homePage'>
        <img src='/images/home/homepage.jpg' className='main-bg' alt='' />
        <div className='container'>
          <div className='content'>
            <p>{apiData.title}</p>
            <div className='actions'>
              <button
                className='btn-custom btn-view'
                onClick={() => movieModal?.showModal()}
              >
                <PlayIcon />
                {t("Ko'rish")}
              </button>
              <a href='#' data- className='btn-custom btn-more'>
                <BiInfoCircle />
                {t("Ko'proq ma'lumot")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* movie modal */}
      <MovieModal />
    </>
  )
}
