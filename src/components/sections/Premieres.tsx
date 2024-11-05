'use client'

import { useTranslations } from 'next-intl'
import Slider from 'react-slick'

export default function Premieres() {
  const t = useTranslations()
  const sliderSettings = {
    slidesToShow: 6, // Number of slides in the group
    slidesToScroll: 6, // Scroll by group
    speed: 800,
    cssEase: 'ease',
    infinite: false,
    centerMode: false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4, // Number of slides in the group
          slidesToScroll: 4 // Scroll by group
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1.8
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }

  return (
    <div className='see-movies'>
      <h2 className='font-serif'>
        <a href='#'>{t('Primyera')}</a>
      </h2>
      <div className='slider-list-movies'>
        <Slider {...sliderSettings}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div className='item-slick' key={`premieres-${i}`}>
              <div className='block-slide-movie'>
                <a href='#' className='under'>
                  <img src='/images/home/movie1.jpg' alt='' />
                </a>
                <div className='on-hover'>
                  <img className='imgs' src='/images/home/movie3.jpg' alt='' />
                  <div className='text'>
                    <div className='actions'>
                      <div className='links'>
                        <a href='#' className='play'>
                          <svg
                            width='36'
                            height='36'
                            viewBox='0 0 36 36'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect width='36' height='36' rx='18' fill='white' />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M15.2785 12.3689L23.0921 16.7643C24.0804 17.3194 24.0804 18.6805 23.0921 19.2357L15.2785 23.631C14.2721 24.1976 13 23.5066 13 22.3943V13.6056C13 12.4934 14.2721 11.8023 15.2785 12.3689Z'
                              fill='#0D0D0D'
                            />
                          </svg>
                        </a>
                        <a href='#' className='plus'>
                          <svg
                            width='36'
                            height='36'
                            viewBox='0 0 36 36'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect
                              x='0.5'
                              y='0.5'
                              width='35'
                              height='35'
                              rx='17.5'
                              stroke='white'
                              strokeOpacity='0.1'
                            />
                            <path
                              d='M12.167 13H23.8337'
                              stroke='white'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M13 10.5H23'
                              stroke='white'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M19.6675 25.5H12.1667C11.2458 25.5 10.5 24.7542 10.5 23.8333V17.1667C10.5 16.2458 11.2458 15.5 12.1667 15.5H23.8333C24.7542 15.5 25.5 16.2458 25.5 17.1667V19.6667'
                              stroke='white'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M23.8282 22.1667H20.5049'
                              stroke='white'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M22.1667 23.8283V20.505'
                              stroke='white'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18 22.1667C18 19.8658 19.8658 18 22.1667 18C24.4675 18 26.3333 19.8658 26.3333 22.1667C26.3333 24.4683 24.4675 26.3333 22.1667 26.3333C19.8658 26.3333 18 24.4683 18 22.1667'
                              stroke='white'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </a>
                        <a href='#' className='like'>
                          <svg
                            width='36'
                            height='36'
                            viewBox='0 0 36 36'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect
                              x='0.5'
                              y='0.5'
                              width='35'
                              height='35'
                              rx='17.5'
                              stroke='white'
                              strokeOpacity='0.1'
                            />
                            <path
                              d='M14.9168 16.7495V24.6695'
                              stroke='white'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M14.9169 16.7496L16.8642 11.8562C17.0322 11.4339 17.5075 11.2241 17.9328 11.3843L18.4657 11.5852C19.4398 11.9523 20.0847 12.8845 20.0847 13.9255V16.7495H22.5847C23.2265 16.7495 23.8325 17.0452 24.2275 17.551C24.6225 18.0569 24.7623 18.7165 24.6067 19.3392L23.6688 23.0907C23.4368 24.0185 22.6032 24.6694 21.6468 24.6694H12.5816C11.8909 24.6694 11.3311 24.1096 11.3311 23.4189V18C11.3311 17.3094 11.8909 16.7495 12.5816 16.7495L14.9169 16.7496Z'
                              stroke='white'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </a>
                      </div>
                      <a href='#' className='fullscreen'>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 36 36'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            x='0.5'
                            y='0.5'
                            width='35'
                            height='35'
                            rx='17.5'
                            stroke='white'
                            strokeOpacity='0.1'
                          />
                          <path
                            d='M22.167 10.5H25.5003V13.8333'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M20.5 15.5L25.5 10.5'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M13.8333 25.5H10.5V22.1666'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M15.5 20.5L10.5 25.5'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M11.333 17.1667V13C11.333 12.0792 12.0788 11.3334 12.9997 11.3334H17.1663'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M24.6667 18.8334V23C24.6667 23.9209 23.9208 24.6667 23 24.6667H18'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='logotype'>
                      <img src='/images/home/logo-film.svg' alt='' />
                      KINO
                    </div>
                    <h3>101 Reys</h3>
                    <div className='info'>
                      <div className='times'>
                        <span>2019</span>
                        <span> 1s. 56m.</span>
                      </div>
                      <div className='category'>
                        <div>
                          <span>16+</span>
                        </div>
                        <div>
                          <span>HD</span>
                        </div>
                      </div>
                      <a href='#' className='count-likes'>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.53367 6.99963V13.3356'
                            stroke='white'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.53375 6.99974L7.09155 3.08506C7.22598 2.74725 7.60622 2.57935 7.94644 2.70757L8.37276 2.86824C9.15207 3.16196 9.66796 3.90769 9.66796 4.74051V6.99968H11.668C12.1814 6.99968 12.6662 7.23623 12.9822 7.64093C13.2982 8.04562 13.4101 8.57333 13.2855 9.07143L12.5352 12.0727C12.3497 12.8149 11.6828 13.3356 10.9177 13.3356H3.66546C3.11294 13.3356 2.66504 12.8877 2.66504 12.3352V8.0001C2.66504 7.44758 3.11294 6.99968 3.66546 6.99968L5.53375 6.99974Z'
                            stroke='white'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        8.2/234
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
