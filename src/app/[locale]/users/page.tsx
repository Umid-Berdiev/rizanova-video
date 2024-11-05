import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import '@/src/styles/auth.css'

export default async function UsersPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations()

  return (
    <section className='user-section pt-32'>
      <div className='container'>
        <h1>Kim tomosha qilmoqchi?</h1>
        <div className='user-list'>
          <Link href='users/age' className='item'>
            <img src='/images/auth/user.png' alt='' />
            <p>Shakhzod</p>
            <span>Admin</span>
          </Link>
          <Link href='users/age' className='item'>
            <img src='/images/auth/children.png' alt='' />
            <p>Bolalar</p>
            <span>12+</span>
          </Link>
          <Link href='users/age' className='item'>
            <img src='/images/auth/panda.png' alt='' />
            <p>Bolalar</p>
            <span>6+</span>
          </Link>
          <Link href='users/age' className='item'>
            <img src='/images/auth/user-add.png' alt='' />
            <p>Akkaunt qo’shish</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
