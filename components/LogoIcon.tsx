export default function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M18 3L4 14v18h28V14L18 3z" stroke="#4A6FA5" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
      <ellipse cx="18" cy="22" rx="5" ry="7" fill="#C67B5C"/>
      <path d="M18 10c-1 1-2 3-2 5h4c0-2-1-4-2-5z" fill="#3D6B35"/>
      <path d="M16 12c-1.5 0-3 .5-3 1.5S14.5 15 16 15" stroke="#3D6B35" strokeWidth="1.2" fill="none"/>
      <path d="M20 12c1.5 0 3 .5 3 1.5S21.5 15 20 15" stroke="#3D6B35" strokeWidth="1.2" fill="none"/>
    </svg>
  )
}
