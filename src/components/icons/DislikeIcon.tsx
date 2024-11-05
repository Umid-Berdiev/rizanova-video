export default function DislikeIcon({ color = "#fff", size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5505 20.251L23.5505 5.99504"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5513 20.251L20.0462 29.059C19.7437 29.8191 18.8882 30.1968 18.1227 29.9083L17.1635 29.5468C15.41 28.886 14.2493 27.2081 14.2493 25.3342L14.2493 20.2511L9.74927 20.2511C8.59403 20.2511 7.50322 19.7188 6.79227 18.8083C6.08133 17.8977 5.82954 16.7104 6.10973 15.5896L7.79793 8.83682C8.21545 7.16676 9.71601 5.99515 11.4375 5.99515L27.7549 5.99515C28.9981 5.99515 30.0059 7.00293 30.0059 8.24609L30.0059 18.0002C30.0059 19.2433 28.9981 20.2511 27.7549 20.2511L23.5513 20.251Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
