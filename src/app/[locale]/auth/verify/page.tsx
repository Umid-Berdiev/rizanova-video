import SmsVerificationForm from '@/src/components/forms/SmsVerificationForm'
import { getTranslations } from 'next-intl/server'

export default async function Verify({
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
            <h1>{t('Tasdiqlash kodi')}</h1>
            <p>
              {t("Tasdiqlash kodini sizning telefon nomeringizga jo'natdik")}
            </p>
          </div>
          <SmsVerificationForm locale={locale} />
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
