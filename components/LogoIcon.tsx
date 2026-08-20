export default function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M18 3L4 14v18h28V14L18 3z" stroke="#1e3a2f" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
      <ellipse cx="18" cy="22" rx="5" ry="7" fill="#c26a4f"/>
      <path d="M18 10c-1 1-2 3-2 5h4c0-2-1-4-2-5z" fill="#4a7c59"/>
      <path d="M16 12c-1.5 0-3 .5-3 1.5S14.5 15 16 15" stroke="#4a7c59" strokeWidth="1.2" fill="none"/>
      <path d="M20 12c1.5 0 3 .5 3 1.5S21.5 15 20 15" stroke="#4a7c59" strokeWidth="1.2" fill="none"/>
    </svg>
  )
}
