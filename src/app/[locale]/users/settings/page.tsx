import '@/src/styles/auth.css'
import { getTranslations } from 'next-intl/server'

export default async function UsersSettingsPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations()

  return (
    <section className='user-section profile pt-32'>
      <div className='container'>
        <h1>Profil sozlamalari</h1>
        <div className='profile-img'>
          <img src='/images/auth/panda.png' alt='' />
          <a href='#'>
            <img src='/images/auth/change.svg' alt='' />
          </a>
        </div>
        <form action='#' className='form-style'>
          <div className='form-group'>
            <input type='text' value='Bolalar' />
          </div>
          <div className='form-group with-select'>
            <select name='' id=''>
              <option value='1'>6 yoshdan katta bolalar uchun</option>
              <option value='2'>12 yoshdan katta bolalar uchun</option>
              <option value='3'>Kattalar uchun</option>
            </select>
          </div>
          <div className='checked-block'>
            <span>Qurilma uchun standart qilish</span>
            <div className='widget switch'>
              <input
                type='checkbox'
                id='chsw1'
                name='pantheras'
                value='isCheck'
              />
              <label htmlFor='chsw1'></label>
            </div>
          </div>
          <button className='btn-custom btn-red' type='submit'>
            Davom etish
          </button>
        </form>
      </div>
    </section>
  )
}
