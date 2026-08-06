// Custom chat-bubble mark with a small sparkle — reads clearly as "chat",
// but distinct from stock messenger/WhatsApp-style bubble icons.
export default function ChatIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 6.5C4 4.567 5.567 3 7.5 3H16.5C18.433 3 20 4.567 20 6.5V12.5C20 14.433 18.433 16 16.5 16H10L5.8 19.4C5.47 19.67 5 19.43 5 19V16H7.5C5.567 16 4 14.433 4 12.5V6.5Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M4 6.5C4 4.567 5.567 3 7.5 3H16.5C18.433 3 20 4.567 20 6.5V12.5C20 14.433 18.433 16 16.5 16H10L5.8 19.4C5.47 19.67 5 19.43 5 19V16H7.5C5.567 16 4 14.433 4 12.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 5.8L14.9 7.7L16.8 8.4L14.9 9.1L14.2 11L13.5 9.1L11.6 8.4L13.5 7.7Z"
        fill="currentColor"
      />
    </svg>
  )
}
