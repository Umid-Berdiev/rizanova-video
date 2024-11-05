'use client'

import { useTranslations } from 'next-intl'

export default function AppDialog({
  children,
  className,
  id,
  onClose
}: {
  children: React.ReactNode
  className?: string
  id: string
  onClose?: () => void
}) {
  const t = useTranslations()

  return (
    <dialog id={id} className='modal'>
      <div className={`modal-box ${className}`}>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button
            className='btn btn-circle btn-ghost absolute right-2 top-2 text-lg focus-visible:outline-none'
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        {children}
        <div className='modal-buttons'>
          <button className='btn-custom btn-more' type='button'>
            {t('Bekor qilish')}
          </button>
          <button
            data-dismiss='modal'
            className='btn-custom btn-red'
            type='button'
          >
            {t('Saqlash')}
          </button>
        </div>
      </div>
    </dialog>
  )
}
