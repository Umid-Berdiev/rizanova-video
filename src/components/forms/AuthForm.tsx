'use client'

import endpoints from '@/src/utils/api/endpoints'
import { withAxios } from '@/src/utils/api/request'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

export default function AuthForm({ locale }: { locale: string }) {
  const t = useTranslations()
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')

  const defaultValues = {
    username: ''
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

    let { data: res } = await withAxios(locale)(endpoints.auth.loginWithPhone, {
      method: 'POST',
      data
    })

    if (res.status === 'error') {
      setErrorMessage(t('Источник не указан'))
      return
    }

    localStorage.setItem('sms-id', res.id)
    localStorage.setItem('phone', data.username)
    setIsLoading(false)
    router.push(`/${locale}/auth/verify`)
  }

  return (
    <form className='form-style' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <ReactInputMask
          className='phone-mask'
          {...register('username', { required: true })}
          mask='+\9\98 99 999 99 99'
          maskPlaceholder={''}
          placeholder='+998 00 000 00 00'
        />
        {errors.username?.message && errors.username?.message.length > 0 && (
          <span className='error-text'>{errors.username.message}</span>
        )}
        {errorMessage.length > 0 && (
          <span className='error-text'>{errorMessage}</span>
        )}
      </div>
      <button className='btn-custom btn-red' type='submit' disabled={isLoading}>
        <span>{t('Davom etish')}</span>
        {isLoading && <i className='fa fa-spinner' aria-hidden='true'></i>}
      </button>
      <div className='sign-with-social'>
        <a href=''>
          <img src='/images/auth/google.svg' alt='' />
          {t('Google orqali kirish')}
        </a>
        <a href=''>
          <img src='/images/auth/apple.svg' alt='' />
          {t('Apple ID orqali kirish')}
        </a>
      </div>
    </form>
  )
}
