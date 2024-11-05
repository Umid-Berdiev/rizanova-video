import ProfileSection from '@/src/components/sections/ProfileSection'
import '@/src/styles/custom.css'
import { getTranslations } from 'next-intl/server'

export default async function ProfileIndex({
  params: { locale }
}: {
  params: {
    locale: string
  }
}) {
  const t = await getTranslations()

  return (
    <>
      <ProfileSection locale={locale} />

      <div
        className='fade myModalTheme modal'
        id='myModalContactUs'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='myModalMovieLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close-modal-button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <svg
                width='28'
                height='29'
                viewBox='0 0 28 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect y='0.5' width='28' height='28' rx='14' fill='#222124' />
                <path
                  d='M10.667 11.1667L17.3337 17.8333'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M17.3337 11.1667L10.667 17.8333'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <h3>Biz bilan bog'lanish</h3>
            <div className='arbitary-main'>
              <a href='#' className='item'>
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.6649 15.3344C11.2999 13.9694 10.2709 12.4411 9.58719 10.8906C9.44252 10.5628 9.52769 10.1789 9.78085 9.92577L10.7364 8.97143C11.5192 8.1886 11.5192 7.08143 10.8355 6.39777L9.46585 5.0281C8.55469 4.11693 7.07769 4.11693 6.16652 5.0281L5.40585 5.78877C4.54135 6.65327 4.18085 7.90043 4.41419 9.1371C4.99052 12.1856 6.76152 15.5234 9.61869 18.3806C12.4759 21.2378 15.8137 23.0088 18.8622 23.5851C20.0989 23.8184 21.346 23.4579 22.2105 22.5934L22.97 21.8339C23.8812 20.9228 23.8812 19.4458 22.97 18.5346L21.6015 17.1661C20.9179 16.4824 19.8095 16.4824 19.127 17.1661L18.0735 18.2208C17.8204 18.4739 17.4365 18.5591 17.1087 18.4144C15.5582 17.7296 14.0299 16.6994 12.6649 15.3344Z'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Operator bilan bog'lanish
              </a>
              <a href='#' className='item'>
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M24.4998 13.1729C24.4998 18.4684 19.7772 22.7185 13.9998 22.7185C13.252 22.7185 12.524 22.645 11.8193 22.5097'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M7.69883 20.797C5.15667 19.0587 3.5 16.303 3.5 13.1729'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M7.69912 20.7969C7.69796 21.7932 7.70029 23.1372 7.70029 24.5477'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.5 13.1729C3.5 7.87742 8.22267 3.62842 14 3.62842C19.7773 3.62842 24.5 7.87858 24.5 13.1741'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.8185 22.5049L7.7002 24.5465'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14.2066 13.2106C14.3205 13.3245 14.3205 13.5092 14.2066 13.6231C14.0927 13.737 13.908 13.737 13.7941 13.6231C13.6802 13.5092 13.6802 13.3245 13.7941 13.2106C13.908 13.0967 14.0927 13.0967 14.2066 13.2106'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M18.8726 13.2106C18.9865 13.3245 18.9865 13.5092 18.8726 13.6231C18.7587 13.737 18.574 13.737 18.4601 13.6231C18.3462 13.5092 18.3462 13.3245 18.4601 13.2106C18.574 13.0967 18.7587 13.0967 18.8726 13.2106'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.53957 13.2106C9.65348 13.3245 9.65348 13.5092 9.53957 13.6231C9.42567 13.737 9.241 13.737 9.12709 13.6231C9.01319 13.5092 9.01319 13.3245 9.12709 13.2106C9.241 13.0967 9.42567 13.0967 9.53957 13.2106'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Telegram botimizga yozing
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className='fade myModalTheme modal'
        id='myModalLanguage'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='myModalMovieLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close-modal-button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <svg
                width='28'
                height='29'
                viewBox='0 0 28 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect y='0.5' width='28' height='28' rx='14' fill='#222124' />
                <path
                  d='M10.667 11.1667L17.3337 17.8333'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M17.3337 11.1667L10.667 17.8333'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <h3>Tema tili</h3>
            <form action='#' className='form-theme'>
              <input type='radio' checked id='language1' name='language' />
              <label htmlFor='language1'>Uzbek</label>
              <input type='radio' id='language2' name='language' />
              <label htmlFor='language2'>Rus</label>
            </form>
            <div className='modal-buttons'>
              <button className='btn-custom btn-more' type='button'>
                Bekor qilish
              </button>
              <button
                data-dismiss='modal'
                className='btn-custom btn-red'
                type='button'
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className='fade myModalTheme modal'
        id='myModalPromocode'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='myModalMovieLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close-modal-button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <svg
                width='28'
                height='29'
                viewBox='0 0 28 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect y='0.5' width='28' height='28' rx='14' fill='#222124' />
                <path
                  d='M10.667 11.1667L17.3337 17.8333'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M17.3337 11.1667L10.667 17.8333'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <h3>Promo kodni kiritish</h3>
            <form action='#' className='form-style'>
              <label htmlFor='promod'>Promo kodni kiriting</label>
              <input id='promod' type='text' />
            </form>
            <div className='modal-buttons'>
              <button className='btn-custom btn-more' type='button'>
                Bekor qilish
              </button>
              <button
                data-dismiss='modal'
                data-toggle='modal'
                data-target='#myModalSuccessPromocode'
                className='btn-custom btn-red'
                type='button'
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className='fade myModalTheme deleteOffer modal'
        id='myModalSuccessPromocode'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='myModalMovieLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <svg
              width='56'
              className='successCheck'
              height='56'
              viewBox='0 0 56 56'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='56' height='56' rx='28' fill='#3EC074' />
              <path
                d='M41.3327 18.8333L22.9993 37.1666L14.666 28.8333'
                stroke='white'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <h3>Promo kod muvaffaqiyatli kiritildi</h3>
            <p>Promo kodingiz muvaffaqiyatli qo'shildi</p>
            <button
              data-dismiss='modal'
              className='btn-custom btn-red'
              type='button'
            >
              Yaxshi
            </button>
          </div>
        </div>
      </div>

      <div
        className='fade myModalTheme modal'
        id='myModalPhoneChange'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='myModalMovieLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close-modal-button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <svg
                width='28'
                height='29'
                viewBox='0 0 28 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect y='0.5' width='28' height='28' rx='14' fill='#222124' />
                <path
                  d='M10.667 11.1667L17.3337 17.8333'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M17.3337 11.1667L10.667 17.8333'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <h3>Telefon nomerni o'zgartirish</h3>
            <form action='#' className='form-style'>
              <label htmlFor='phone'>Telefon nomer</label>
              <input id='phone' type='text' value='+998 92 123 31 42' />
            </form>
            <div className='modal-buttons'>
              <button className='btn-custom btn-more' type='button'>
                Bekor qilish
              </button>
              <button
                data-dismiss='modal'
                className='btn-custom btn-red'
                type='button'
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
