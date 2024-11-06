'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaSpinner } from 'react-icons/fa'
import ReactInputMask from 'react-input-mask'

export default function AuthForm({ locale }: { locale: string }) {
  const t = useTranslations()
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

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

    let res = await fetch('/api/session', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.status === 200) {
      router.push(`/${locale}/auth/verify`)
    } else {
      setErrorMessage(t('Источник не указан'))
    }

    setIsLoading(false)
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
        {isLoading && <FaSpinner />}
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
