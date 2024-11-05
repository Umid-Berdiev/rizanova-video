export default function PauseIcon({ variant = "black", size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.75 28.5C23.508 28.5 22.5 27.324 22.5 25.875L22.5 10.125C22.5 8.676 23.508 7.5 24.75 7.5C25.992 7.5 27 8.676 27 10.125L27 25.875C27 27.324 25.992 28.5 24.75 28.5Z"
        fill={variant === "black" ? "#0D0D0D" : "#fff"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 28.5C10.008 28.5 9 27.324 9 25.875L9 10.125C9 8.676 10.008 7.5 11.25 7.5C12.492 7.5 13.5 8.676 13.5 10.125L13.5 25.875C13.5 27.324 12.492 28.5 11.25 28.5Z"
        fill={variant === "black" ? "#0D0D0D" : "#fff"}
      />
    </svg>
  );
}
