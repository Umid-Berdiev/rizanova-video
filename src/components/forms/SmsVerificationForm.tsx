'use client'

import endpoints from '@/src/utils/api/endpoints'
import { withAxios } from '@/src/utils/api/request'
import { storeData } from '@/src/utils/storage'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaSpinner } from 'react-icons/fa'

export default function SmsVerificationForm({ locale }: { locale: string }) {
  const t = useTranslations()
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [leftTimeToRequestResendCode, setLeftTimeToRequestResendCode] =
    useState('00:00')

  function moveFocus(
    event: React.KeyboardEvent<HTMLInputElement>,
    direction: 'next' | 'prev'
  ) {
    const current = event.target as HTMLInputElement
    const inputs = document.querySelectorAll(
      '.verification-container input'
    ) as NodeListOf<HTMLInputElement>
    const index = Array.prototype.indexOf.call(inputs, current)

    if (!current?.value) {
      return
    }

    if (direction === 'next' && current.value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus()
      }
    }

    if (direction === 'prev' && event.key === 'Backspace' && !current.value) {
      if (index > 0) {
        inputs[index - 1].focus()
      }
    }
  }

  function handleInput(event: React.KeyboardEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement
    let currentValue = target.value
    const current = event.target as HTMLInputElement

    // Allow only numbers
    if (!/^\d$/.test(currentValue)) {
      currentValue = ''
      return
    }

    moveFocus(event, 'next')
    current.style.animation = 'none'
    current.offsetHeight /* trigger reflow */
    current.style.animation = ''
  }

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')
    const verificationCode = Array.from(
      document.querySelectorAll(
        '.verification-container input'
      ) as NodeListOf<HTMLInputElement>
    )
      .map(input => input.value)
      .join('')

    console.log(verificationCode)

    if (verificationCode.length < 6) {
      setErrorMessage(t("Tasdiqlash kodini to'liq kiriting"))
      toast.error(errorMessage)
      return
    }

    try {
      setIsLoading(true)

      let res = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: verificationCode
        })
      })

      if (res.status !== 200) {
        console.log({ res })

        setErrorMessage(t('Tasdiqlashda xatolik'))
        toast.error(errorMessage)
        return
      }

      const data = await res.json()

      if (data.user.profiles?.length === 0) {
        storeData('phone', verificationCode)
        router.push(`/${locale}/auth/signup`)
      }

      storeData('token', data.user.token)
      router.push(`/${locale}`)
    } catch (verifyError: any) {
      console.log({ verifyError })

      const message = verifyError.response?.data?.message || verifyError.message
      setErrorMessage(message)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  async function resendCode() {
    try {
      const { data: res } = await withAxios(locale)(
        endpoints.auth.loginWithPhone,
        {
          method: 'POST',
          data: {
            username: localStorage.getItem('phone')
          }
        }
      )

      if (res.status === 'error') {
        setErrorMessage(t('Tasdiqlashda xatolik'))
        toast.error(errorMessage)
        return
      }

      toast.success(t('Tasdiqlash kodi qayta yuborildi'))
      localStorage.setItem('sms-id', res.id)
      setTimer()
    } catch (resendError: any) {
      const message = resendError.response?.data?.message || resendError.message
      setErrorMessage(message)
      toast.error(errorMessage)
    }
  }

  function setTimer() {
    let timeLeft = 120
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft -= 1
        const minutes = Math.floor(timeLeft / 60)
        const seconds = timeLeft % 60
        setLeftTimeToRequestResendCode(
          `${minutes < 10 ? '0' : ''}${minutes}:${
            seconds < 10 ? '0' : ''
          }${seconds}`
        )
      }
    }, 1000)

    return timer
  }

  useEffect(() => {
    const intervalId = setTimer()

    return () => clearInterval(intervalId)
  }, [])

  return (
    <form className='' autoComplete='off' onSubmit={submitHandler}>
      <div className='verification-container'>
        <input
          type='text'
          maxLength={1}
          onInput={handleInput}
          onKeyDown={event => moveFocus(event, 'prev')}
          autoComplete='off'
          autoFocus
        />
        <input
          type='text'
          maxLength={1}
          onInput={handleInput}
          onKeyDown={event => moveFocus(event, 'prev')}
          autoComplete='off'
        />
        <input
          type='text'
          maxLength={1}
          onInput={handleInput}
          onKeyDown={event => moveFocus(event, 'prev')}
          autoComplete='off'
        />
        <input
          type='text'
          maxLength={1}
          onInput={handleInput}
          onKeyDown={event => moveFocus(event, 'prev')}
          autoComplete='off'
        />
        <input
          type='text'
          maxLength={1}
          onInput={handleInput}
          onKeyDown={event => moveFocus(event, 'prev')}
          autoComplete='off'
        />
        <input
          type='text'
          maxLength={1}
          onInput={handleInput}
          onKeyDown={event => moveFocus(event, 'prev')}
          autoComplete='off'
        />
      </div>
      <div className='resend'>
        {leftTimeToRequestResendCode !== '00:00' ? (
          <p>
            {t("Kodni qayta jo'natish")}{' '}
            <span className='timer'>{leftTimeToRequestResendCode}</span>
          </p>
        ) : (
          <button
            className='resend-code-btn'
            onClick={resendCode}
            type='button'
          >
            {t("Kodni qayta jo'natish")}
          </button>
        )}
      </div>
      <button className='btn-custom btn-red' type='submit' disabled={isLoading}>
        <span>{t('Davom etish')}</span>
        {isLoading && <FaSpinner />}
      </button>
    </form>
  )
}
