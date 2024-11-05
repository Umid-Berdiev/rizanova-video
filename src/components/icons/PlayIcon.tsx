export default function PlayIcon({ variant = "black", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.73417 5.24276L18.1105 10.5172C19.2965 11.1833 19.2965 12.8167 18.1105 13.4828L8.73417 18.7572C7.5265 19.4372 6 18.6079 6 17.2732V6.72676C6 5.39208 7.5265 4.56279 8.73417 5.24276Z"
        fill={variant === "black" ? "#0D0D0D" : "#fff"}
      />
    </svg>
  );
}
