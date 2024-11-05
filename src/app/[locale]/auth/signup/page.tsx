import SignupForm from '@/src/components/forms/SignupForm'
import { getTranslations } from 'next-intl/server'

export default async function Signup({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations()

  return (
    <section className='login-section'>
      <div className='left'>
        <div className='content'>
          <div className='title'>
            <h1>{t("Ro'yxatdan o'tish")}</h1>
            <p>{t("Ro'yxatdan o'tish uchun ism familiyangizni kiriting")}</p>
          </div>
          <SignupForm locale={locale} />
        </div>
      </div>
      <div className='right'>
        <div className='logo-text'>
          <span className='red-text'>RizaNova</span>
          <span className='white-text'>Kino</span>
        </div>
      </div>
    </section>
  )
}
