import { Header } from '@/src/components/Header'
import { ThemeProvider } from '@/src/components/ThemeProvider'
import type { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'

import '@/src/styles/globals.css'

import '@/src/styles/custom.css'

import '@/src/styles/mynew.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--manrope'
})

const magnetTrial = localFont({
  src: [
    {
      path: '../../assets/fonts/MagnetTrial/MagnetTrial-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/MagnetTrial/MagnetTrial-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/MagnetTrial/MagnetTrial-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/MagnetTrial/MagnetTrial-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--magnet-trial'
})

export const metadata: Metadata = {
  title: 'Rizanova Video',
  description: 'Rizanova Video'
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()

  return (
    <html
      lang={locale}
      dir={'ltr'}
      className={`${manrope.variable} ${magnetTrial.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='dark'
          themes={['light', 'dark']}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
              color='var(--primary)'
              showSpinner={false}
            />
            <Header locale={locale} />
            <main className=''>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
