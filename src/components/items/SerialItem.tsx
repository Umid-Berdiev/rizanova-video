import { useTranslations } from 'next-intl'
import { BsDownload } from 'react-icons/bs'
import { LiaTimesSolid } from 'react-icons/lia'
import { PiShareFat } from 'react-icons/pi'
import DotsIcon from '../icons/DotsIcon'

export default function SerialItem() {
  const t = useTranslations()

  return (
    <div className='movie-progress'>
      <a href='#' className='fone'>
        <img src='/images/home/movie4.jpg' alt='' />
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: '40%' }}
            aria-valuenow='40'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
      </a>
      <div className='progress-body'>
        <div>
          <h4>The Flash</h4>
          <span>24 min.</span>
        </div>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='dropdown-toggle'>
            <DotsIcon />
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content z-10 w-64 divide-y divide-white divide-opacity-15 rounded-2xl bg-quaternary'
          >
            <li>
              <button className='flex w-full items-center gap-3 rounded-t-2xl p-4 text-sm font-medium text-white hover:bg-gray-700'>
                <BsDownload className='flex-none' size={16} />
                {t('Yuklab olish')}
              </button>
            </li>
            <li>
              <button className='flex w-full items-center gap-3 p-4 text-sm font-medium text-white hover:bg-gray-700'>
                <LiaTimesSolid className='flex-none' size={16} />
                {t("Mening ro'yxatimdan o'chirish")}
              </button>
            </li>
            <li>
              <button className='flex w-full items-center gap-3 rounded-b-2xl p-4 text-sm font-medium text-white hover:bg-gray-700'>
                <PiShareFat className='flex-none' size={16} />
                {t('Ulashish')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
