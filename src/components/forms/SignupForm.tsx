'use client'

import endpoints from '@/src/utils/api/endpoints'
import { withAxios } from '@/src/utils/api/request'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

export default function SignupForm({ locale }: { locale: string }) {
  const t = useTranslations()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const defaultValues = {
    username: localStorage.getItem('phone') || '',
    full_name: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm({ defaultValues })

  async function onSubmit(data: any) {
    setIsLoading(true)
    const { data: res } = await withAxios(locale)(endpoints.auth.signup, {
      method: 'POST',
      data: {
        username: data.username,
        full_name: data.full_name,
        is_main: 1,
        type: 1
      }
    })

    console.log('Response from signup page: ', res)

    // if (res.status === "error") {
    //   console.log("Error from signup page: ", res);
    //   return;
    // }

    setIsLoading(false)
    router.push(`/${locale}/users`)
  }

  return (
    <form className='form-style' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <ReactInputMask
          className='phone-mask'
          {...register('username', { required: true })}
          mask='+\9\98 99 999 99 99'
          maskPlaceholder={''}
        />
      </div>
      <div className='form-group username'>
        <input
          className='user-mask'
          {...register('full_name', { required: true })}
          type='text'
          placeholder={t('Full_name')}
        />
      </div>
      <button className='btn-custom btn-red' type='submit' disabled={isLoading}>
        <span>{t('Davom etish')}</span>
        {isLoading && <i className='fa fa-spinner' aria-hidden='true'></i>}
      </button>
    </form>
  )
}
