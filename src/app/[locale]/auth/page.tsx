import AuthForm from '@/src/components/forms/AuthForm'
import { getTranslations } from 'next-intl/server'

export default async function Auth({
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
            <h1>{t("Tizimga kiring yoki ro'yxatdan o'ting")}</h1>
          </div>
          <AuthForm locale={locale} />
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
