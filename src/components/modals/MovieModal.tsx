'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { BiHeart, BiLike, BiPlay } from 'react-icons/bi'
import { PiShareFat } from 'react-icons/pi'
import FoldersWithPlusIcon from '../icons/FoldersWithPlusIcon'
import SerialItem from '../items/SerialItem'

export default function MovieModal() {
  const t = useTranslations()
  const [isPlaying, setIsPlaying] = useState(false)

  const [seasonActiveTab, setSeasonActiveTab] = useState(0)

  const video = useRef<HTMLVideoElement | null>(null)
  const progressBar = useRef<HTMLDivElement>(null)
  const progress = useRef<HTMLDivElement>(null)
  const time = useRef<HTMLDivElement>(null)
  const volume = useRef(null)
  const [episodesListDropdown, setEpisodesListDropdown] = useState(false)

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return minutes + ':' + (secs < 10 ? '0' : '') + secs
  }

  function togglePlay() {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }

  function openEpisodesListDropdown() {
    setEpisodesListDropdown(true)
  }

  function closeModal() {
    const modal = document.getElementById('movie-modal')
    if (modal) {
      // @ts-ignore
      modal.close()
    }
  }

  useEffect(() => {
    if (video.current) {
      video.current.addEventListener('timeupdate', () => {
        if (
          video.current &&
          progressBar.current &&
          progress.current &&
          time.current
        ) {
          const currentTime = video.current.currentTime
          const duration = video.current.duration
          const percent = (currentTime / duration) * 100
          progress.current.style.width = percent + '%'
          time.current.textContent =
            formatTime(currentTime) + ' / ' + formatTime(duration)
        }
      })
    }

    if (progressBar.current) {
      progressBar.current.addEventListener('click', e => {
        if (progressBar.current && video.current) {
          const rect = progressBar.current.getBoundingClientRect()
          const offsetX = e.clientX - rect.left
          const percent = offsetX / progressBar.current.offsetWidth
          video.current.currentTime = percent * video.current.duration
        }
      })
    }
  }, [])

  useEffect(() => {
    if (video.current) {
      if (isPlaying) {
        video.current.play()
      } else {
        video.current.pause()
      }
    }
  }, [isPlaying])

  return (
    <dialog id='movie-modal' className='modal'>
      <div className='modal-box w-11/12 max-w-5xl bg-background-secondary p-0'>
        <div className='absolute right-6 top-6 z-10 rounded-full bg-background-secondary p-0.5'>
          <button type='button' className='btn btn-circle btn-ghost btn-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M3.26122 20.475C3.11622 20.475 2.99922 20.593 3.00022 20.737C2.99922 20.882 3.11722 21 3.26122 21C3.40522 21 3.52322 20.882 3.52322 20.738C3.52322 20.594 3.40622 20.475 3.26122 20.475'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.5 21C6.455 18.951 5.049 17.545 3 17.5'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3 14C3.885 14.01 4.715 14.16 5.474 14.428C7.417 15.115 8.886 16.583 9.572 18.526C9.84 19.285 9.99 20.115 10 21'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3 10.6667V7.33333C3 6.59667 3.895 6 5 6H19C20.105 6 21 6.59667 21 7.33333V16.6667C21 17.4033 20.105 18 19 18H13'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            type='button'
            className='btn btn-circle btn-ghost btn-sm'
            onClick={() => closeModal()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M7 7L17 17'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M17 7L7 17'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <video
          id='video'
          ref={video}
          src='/videos/template.mp4'
          onClick={togglePlay}
        ></video>
        <div className='flex flex-col gap-4 p-6'>
          <div className='flex flex-col items-start gap-1 self-stretch'>
            <div className='logotype'>
              <img src='/images/home/logo-film.svg' alt='' />
              KINO
            </div>
            <h3 className='font-serif text-2xl font-medium'>101 Reys</h3>
            <div className='flex w-full items-center gap-1 self-stretch text-sm'>
              <span>2019</span>
              {/* dot */}
              &bull;
              <span> 1s. 56m.</span>
              &bull;
              <span className='rounded bg-[#69676B] p-px text-black'>16+</span>
              &bull;
              <span className='rounded bg-[#69676B] p-px text-black'>HD</span>
              <BiLike className='ml-auto mr-1' />
              <span>8.2/234</span>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <a href='#' className='btn-custom btn-view btn-md'>
                <BiPlay />
                {t("Ko'rish")}
              </a>
              <a href='#'>
                <FoldersWithPlusIcon />
              </a>
              <button className='flex size-9 items-center justify-center rounded-full border border-white border-opacity-10'>
                <BiLike size={20} />
              </button>
            </div>
            <div className='ml-auto flex items-center gap-3'>
              <button className='flex size-9 items-center justify-center rounded-full border border-white border-opacity-10'>
                <PiShareFat />
              </button>
              <button className='flex size-9 items-center justify-center rounded-full border border-white border-opacity-10'>
                <BiHeart />
              </button>
            </div>
          </div>
          <div className='seasons'>
            <nav>
              <div className='nav' id='navSeason' role='tablist'>
                <button
                  className={seasonActiveTab === 0 ? 'active' : ''}
                  type='button'
                  onClick={() => setSeasonActiveTab(0)}
                >
                  Sezon 1
                </button>
                <button
                  className={seasonActiveTab === 1 ? 'active' : ''}
                  type='button'
                  onClick={() => setSeasonActiveTab(1)}
                >
                  Sezon 2
                </button>
                <button
                  className={seasonActiveTab === 2 ? 'active' : ''}
                  type='button'
                  onClick={() => setSeasonActiveTab(2)}
                >
                  Sezon 3
                </button>
              </div>
            </nav>
            <div className=''>
              <div className={seasonActiveTab === 0 ? '' : 'hidden'}>
                <div className='list-seasons'>
                  <SerialItem />
                  <SerialItem />
                  <SerialItem />
                </div>
              </div>
              <div className={seasonActiveTab === 1 ? '' : 'hidden'}>
                <div className='list-seasons'>
                  <SerialItem />
                  <SerialItem />
                </div>
              </div>
              <div className={seasonActiveTab === 2 ? '' : 'hidden'}>
                <div className='list-seasons'>
                  <SerialItem />
                </div>
              </div>
            </div>
          </div>
          <div className='modal-tab-main'>
            <nav>
              <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                <button
                  className='active'
                  id='nav-home-tab'
                  data-toggle='tab'
                  data-target='#nav-home'
                  type='button'
                  role='tab'
                  aria-controls='nav-home'
                  aria-selected='true'
                >
                  Ma’lumot
                </button>
                <button
                  className=''
                  id='nav-profile-tab'
                  data-toggle='tab'
                  data-target='#nav-profile'
                  type='button'
                  role='tab'
                  aria-controls='nav-profile'
                  aria-selected='false'
                >
                  Sharhlar
                </button>
                <button
                  className=''
                  id='nav-contact-tab'
                  data-toggle='tab'
                  data-target='#nav-contact'
                  type='button'
                  role='tab'
                  aria-controls='nav-contact'
                  aria-selected='false'
                >
                  Aktyorlar
                </button>
                <button
                  className=''
                  id='nav-direct-tab'
                  data-toggle='tab'
                  data-target='#nav-direct'
                  type='button'
                  role='tab'
                  aria-controls='nav-direct'
                  aria-selected='false'
                >
                  Direktorlar
                </button>
              </div>
            </nav>
            <div className='tab-content' id='nav-tabContent'>
              <div
                className='tab-pane fade show active'
                id='nav-home'
                role='tabpanel'
                aria-labelledby='nav-home-tab'
              >
                <div className='contentable'>
                  <p>
                    2001-yil 11-sentabr erta tongda “Oʻzbekiston havo yoʻllari”
                    aviakompaniyasiga tegishli Boeing 757 samolyoti
                    Oʻzbekistondan havoga koʻtarildi. Manzil Nyu-York. Tajribali
                    uchuvchi Zarif Saidazimov nafaqaga chiqishdan oldingi oxirgi
                    parvoz uning faoliyatidagi eng qiyin parvoz bo‘lishini
                    hozircha bilmaydi.
                  </p>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-profile'
                role='tabpanel'
                aria-labelledby='nav-profile-tab'
              >
                <div className='comments'>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' className='user' />
                    <div>
                      <span>shakhzodismoilov </span>
                      <span>20 aprel 2024, 17:32</span>
                      <p>Ajoyib kino maslahat beraman</p>
                      <div className='actions'>
                        <button className='like'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M5.53367 6.99963V13.3356'
                              stroke='#69676B'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M5.53375 6.99974L7.09155 3.08506C7.22598 2.74725 7.60622 2.57935 7.94644 2.70757L8.37276 2.86824C9.15207 3.16196 9.66796 3.90769 9.66796 4.74051V6.99968H11.668C12.1814 6.99968 12.6662 7.23623 12.9822 7.64093C13.2982 8.04562 13.4101 8.57333 13.2855 9.07143L12.5352 12.0727C12.3497 12.8149 11.6828 13.3356 10.9177 13.3356H3.66546C3.11294 13.3356 2.66504 12.8877 2.66504 12.3352V8.0001C2.66504 7.44758 3.11294 6.99968 3.66546 6.99968L5.53375 6.99974Z'
                              stroke='#69676B'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          2
                        </button>
                        <button className='dislike'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M10.4663 9.00049L10.4663 2.66452'
                              stroke='#69676B'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10.4663 9.00038L8.90845 12.9151C8.77402 13.2529 8.39378 13.4208 8.05356 13.2926L7.62724 13.1319C6.84793 12.8382 6.33204 12.0924 6.33204 11.2596L6.33204 9.00044L4.33203 9.00044C3.81859 9.00044 3.33379 8.76389 3.01781 8.35919C2.70184 7.9545 2.58993 7.4268 2.71446 6.92869L3.46477 3.92744C3.65033 3.18518 4.31725 2.66447 5.08234 2.66447L12.3345 2.66447C12.8871 2.66447 13.335 3.11237 13.335 3.66489L13.335 8.00003C13.335 8.55254 12.8871 9.00044 12.3345 9.00044L10.4663 9.00038Z'
                              stroke='#69676B'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          0
                        </button>
                        <button className='writeAnswer'>Javob</button>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' className='user' />
                    <div>
                      <span>shakhzodismoilov </span>
                      <span>20 aprel 2024, 17:32</span>
                      <p>
                        Judayam zo’r kino ekan ayniqsa 45:20 minutdagi voqea
                        meni judayam ta’sirlantirdi. Hammaga ko’rishni maslahat
                        beraman, ketqizgan vaqtingizga arziydi.
                      </p>
                      <div className='actions'>
                        <button className='like active'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M5.53367 6.99963V13.3356'
                              stroke='#69676B'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M5.53375 6.99974L7.09155 3.08506C7.22598 2.74725 7.60622 2.57935 7.94644 2.70757L8.37276 2.86824C9.15207 3.16196 9.66796 3.90769 9.66796 4.74051V6.99968H11.668C12.1814 6.99968 12.6662 7.23623 12.9822 7.64093C13.2982 8.04562 13.4101 8.57333 13.2855 9.07143L12.5352 12.0727C12.3497 12.8149 11.6828 13.3356 10.9177 13.3356H3.66546C3.11294 13.3356 2.66504 12.8877 2.66504 12.3352V8.0001C2.66504 7.44758 3.11294 6.99968 3.66546 6.99968L5.53375 6.99974Z'
                              stroke='#69676B'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          2
                        </button>
                        <button className='dislike'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M10.4663 9.00049L10.4663 2.66452'
                              stroke='#69676B'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10.4663 9.00038L8.90845 12.9151C8.77402 13.2529 8.39378 13.4208 8.05356 13.2926L7.62724 13.1319C6.84793 12.8382 6.33204 12.0924 6.33204 11.2596L6.33204 9.00044L4.33203 9.00044C3.81859 9.00044 3.33379 8.76389 3.01781 8.35919C2.70184 7.9545 2.58993 7.4268 2.71446 6.92869L3.46477 3.92744C3.65033 3.18518 4.31725 2.66447 5.08234 2.66447L12.3345 2.66447C12.8871 2.66447 13.335 3.11237 13.335 3.66489L13.335 8.00003C13.335 8.55254 12.8871 9.00044 12.3345 9.00044L10.4663 9.00038Z'
                              stroke='#69676B'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          0
                        </button>
                        <button className='writeAnswer'>Javob</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-contact'
                role='tabpanel'
                aria-labelledby='nav-contact-tab'
              >
                <div className='acters'>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' />
                    <p>Xoshim Arslonov</p>
                  </div>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' />
                    <p>Xoshim Arslonov</p>
                  </div>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' />
                    <p>Xoshim Arslonov</p>
                  </div>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' />
                    <p>Xoshim Arslonov</p>
                  </div>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' />
                    <p>Xoshim Arslonov</p>
                  </div>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' />
                    <p>Xoshim Arslonov</p>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-direct'
                role='tabpanel'
                aria-labelledby='nav-direct-tab'
              >
                <div className='acters'>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' />
                    <p>Xoshim Arslonov</p>
                  </div>
                  <div className='item'>
                    <img src='/images/home/acter.png' alt='' />
                    <p>Xoshim Arslonov</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>O’xshash kinolar</h3>
          <div className='similar-films'>
            <a href='#'>
              <img src='/images/home/movie2.jpg' alt='' />
            </a>
            <a href='#'>
              <img src='/images/home/movie2.jpg' alt='' />
            </a>
            <a href='#'>
              <img src='/images/home/movie2.jpg' alt='' />
            </a>
            <a href='#'>
              <img src='/images/home/movie2.jpg' alt='' />
            </a>
            <a href='#'>
              <img src='/images/home/movie2.jpg' alt='' />
            </a>
            <a href='#'>
              <img src='/images/home/movie2.jpg' alt='' />
            </a>
          </div>
        </div>
      </div>
    </dialog>
  )
}
