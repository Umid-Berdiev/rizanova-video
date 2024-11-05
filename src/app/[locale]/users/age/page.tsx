import '@/src/styles/auth.css'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function UsersAgePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations()

  return (
    <section className='user-section age pt-32'>
      <div className='container'>
        <h1>Profil yosh chegarasini tanlash</h1>
        <div className='age-check'>
          <Link href={`/${locale}/users/settings`} className='item'>
            <input name='forAge' type='radio' id='age1' />
            <label htmlFor='age1'>
              <h2>Kattalar uchun</h2>
              <p>
                Bu yerda hech qanday cheklovsiz istagan kino va seriallarni
                ko’rishingiz mumkin
              </p>
            </label>
          </Link>
          <Link
            href={`/${locale}/users/settings`}
            className='item bg-[url(/images/auth/age2-bg.svg)]'
          >
            <input name='forAge' type='radio' id='age2' />
            <label htmlFor='age2'>
              <h2>6 yoshdan katta bolalar</h2>
              <p>
                Rang barang va chiroyli multfilmlar shu yerda. Profil
                sozlamalari bolaning xafsizligi uchun cheklangan
              </p>
            </label>
          </Link>
          <Link
            href={`/${locale}/users/settings`}
            className='item bg-[url(/images/auth/age3-bg.svg)]'
          >
            <input name='forAge' type='radio' id='age3' />
            <label htmlFor='age3'>
              <h2>12 yoshdan katta bolalar</h2>
              <p>
                Aqlni charxlovchi, fikrlashni o’rgatuvchi multfilm va kinolar.
                Profil sozlamalari bolaning xafsizligi uchun cheklangan
              </p>
            </label>
          </Link>
        </div>
      </div>
    </section>
  )
}
