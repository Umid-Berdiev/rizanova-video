'use client'

import { useEffect, useRef, useState } from 'react'
import FullVolumeIcon from '../icons/FullVolumeIcon'
import LeftArrowIcon from '../icons/LeftArrowIcon'
import MessagesIcon from '../icons/MessagesIcon'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import PlayNextIcon from '../icons/PlayNextIcon'
import Second15BackIcon from '../icons/Second15BackIcon'
import Second15ForwardIcon from '../icons/Second15ForwardIcon'
import SeriesIcon from '../icons/SeriesIcon'
import SpeedDashboardIcon from '../icons/SpeedDashboardIcon'
import SerialItem from '../items/SerialItem'

import '@/src/styles/video-player.css'
import { GoThumbsdown, GoThumbsup } from 'react-icons/go'

export default function VideoPlayer() {
  const video = useRef<HTMLVideoElement | null>(null)
  const progressBar = useRef<HTMLDivElement>(null)
  const progress = useRef<HTMLDivElement>(null)
  const time = useRef<HTMLDivElement>(null)
  const volume = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
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
    <section className='mx-auto flex h-screen w-full max-w-[1440px] flex-col items-center'>
      <div className='w-full p-10'>
        <div className='flex items-center justify-between text-white'>
          <div className='flex items-center gap-4'>
            {/* go back btn */}
            <button className=''>
              <LeftArrowIcon />
            </button>
            {/* movie title */}
            <div>
              <p className='font-serif text-lg font-semibold'>Movie Title</p>
              <p className='text-sm'>Movie Subtitle</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            {/* like and dislike btns */}
            <button className='group'>
              <GoThumbsup size={36} className='group-hover:text-red-500' />
            </button>
            <button className='group'>
              <GoThumbsdown size={36} className='group-hover:text-red-500' />
            </button>
          </div>
        </div>
      </div>
      <video
        id='video'
        ref={video}
        src='/videos/template.mp4'
        onClick={togglePlay}
      ></video>
      <div className='player-footer'>
        <div className='progress-wrapper'>
          <div className='progress-bar' ref={progressBar}>
            <div className='progress' ref={progress}></div>
          </div>
          <div className='time' ref={time}>
            00:00 / 00:00
          </div>
        </div>
        <div className='controls'>
          <div className='left'>
            <button className='play-pause' onClick={togglePlay}>
              {isPlaying ? (
                <PauseIcon size={36} variant='light' />
              ) : (
                <PlayIcon size={36} variant='light' />
              )}
            </button>
            <button type='button'>
              <Second15BackIcon />
            </button>
            <button type='button'>
              <Second15ForwardIcon />
            </button>
            <button type='button'>
              <FullVolumeIcon />
            </button>
          </div>
          <div className='right'>
            <button type='button'>
              <PlayNextIcon />
            </button>
            <div className='dropdown dropdown-end dropdown-top'>
              <div tabIndex={0} role='button'>
                <SeriesIcon />
              </div>
              <div
                tabIndex={0}
                className='dropdown-content z-[1] rounded-box bg-background-secondary p-2 shadow'
              >
                <div className=''>
                  <div className='seasons'>
                    <nav>
                      <div className='nav' id='navSeason' role='tablist'>
                        <button
                          className='active'
                          id='nav-season-tab'
                          data-toggle='tab'
                          data-target='#nav-season'
                          type='button'
                          role='tab'
                          aria-controls='nav-season'
                          aria-selected='true'
                        >
                          Sezon 1
                        </button>
                        <button
                          className=''
                          id='nav-profile-tab'
                          data-toggle='tab'
                          data-target='#nav-cont'
                          type='button'
                          role='tab'
                          aria-controls='nav-cont'
                          aria-selected='false'
                        >
                          Sezon 2
                        </button>
                        <button
                          className=''
                          id='nav-note'
                          data-toggle='tab'
                          data-target='#nav-key'
                          type='button'
                          role='tab'
                          aria-controls='nav-sd'
                          aria-selected='false'
                        >
                          Sezon 3
                        </button>
                      </div>
                    </nav>
                    <div className='tab-content' id='nav-tabContent'>
                      <div
                        className='tab-pane fade show active'
                        id='nav-season'
                        role='tabpanel'
                        aria-labelledby='nav-season-tab'
                      >
                        <div className='list-seasons'>
                          <SerialItem />
                          <SerialItem />
                          <SerialItem />
                        </div>
                      </div>
                      <div
                        className='tab-pane fade'
                        id='nav-cont'
                        role='tabpanel'
                        aria-labelledby='nav-season-tab2'
                      >
                        sdv
                      </div>
                      <div
                        className='tab-pane fade'
                        id='nav-key'
                        role='tabpanel'
                        aria-labelledby='nav-season-tab3'
                      >
                        879897
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type='button'>
              <SpeedDashboardIcon />
            </button>
            <button type='button'>
              <MessagesIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
