import { getMessages, getTranslations } from 'next-intl/server'
import React from 'react'

import '@/src/styles/auth.css'
import { Manrope } from 'next/font/google'
import Head from 'next/head'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--manrope'
})

export default async function AuthLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  const t = await getTranslations()
  const title = t('Авторизация на сайте RizaNova')
  const description = t(
    'Смотрите только самые свежие узбекские фильмы, музыкальные видеоклипы, сериалы, концерты и юмор в хорошем качестве. А также, слушайте самые свежие узбекские музыки в хорошем качестве на нашем сайте.'
  )
  const keywords = t(
    'узбекские фильм фильмы сериал сериалы клип клипы музыка музыки концерт концерты поиск кино певец певицы актер актеры актриса режиссер сценарист фото фотография постер'
  )

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta
          property='og:image'
          content='https://rizanova.uz/image/logo.png'
        />
        <meta name='keywords' content={keywords} />
      </Head>
      {children}
    </>
  )
}
