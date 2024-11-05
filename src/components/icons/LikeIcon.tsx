export default function LikeIcon({ size = 20, className = '' }) {
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6.91684 8.74951V16.6695'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.91694 8.74955L8.86419 3.8562C9.03223 3.43394 9.50753 3.22406 9.9328 3.38434L10.4657 3.58518C11.4398 3.95233 12.0847 4.88449 12.0847 5.92552V8.74948H14.5847C15.2265 8.74948 15.8325 9.04517 16.2275 9.55104C16.6225 10.0569 16.7623 10.7165 16.6067 11.3392L15.6688 15.0907C15.4368 16.0185 14.6032 16.6694 13.6468 16.6694H4.58158C3.89093 16.6694 3.33105 16.1096 3.33105 15.4189V10C3.33105 9.30935 3.89093 8.74948 4.58158 8.74948L6.91694 8.74955Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}
