import { useTranslations } from 'next-intl'
import MovieModal from '../../components/modals/MovieModal'
import HomeHero from '../../components/sections/HomeHero'
import Premieres from '../../components/sections/Premieres'
import ScaryMovies from '../../components/sections/ScaryMovies'
import WatchNow from '../../components/sections/WatchNow'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function HomePage() {
  const t = useTranslations()

  return (
    <>
      {/* <Head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'
        />
      </Head> */}
      <HomeHero />

      <section className='movies-section'>
        <div className='container'>
          <WatchNow />
          <Premieres />
          <ScaryMovies />
        </div>
      </section>

      <MovieModal />
    </>
  )
}
