export const Logo = (props) => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
    {/* Purple Background */}
    <rect width="40" height="40" rx="8" fill="#7c5cff" />
    {/* White outer shape with notches */}
    <path fillRule="evenodd" clipRule="evenodd" d="M10 10H17V12H23V10H30V16H32V23H30V30H23V32H17V30H10V23H8V16H10V10ZM13 13V16H12V23H13V27H17V26H23V27H27V23H28V16H27V13H23V14H17V13H13Z" fill="white" />
  </svg>
)

export const Globe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.7 5.7 3.7 9S14.5 18.4 12 21c-2.5-2.6-3.7-5.7-3.7-9S9.5 5.6 12 3Z" />
  </svg>
)

export const Chevron = (props) => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" {...props}>
    <path d="m3 4.5 3 3 3-3" />
  </svg>
)

export const ArrowRight = (props) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
)

export const Menu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...props}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)

export const Close = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

/* Partner wordmarks */
export const partners = [
  {
    name: 'QMS',
    mark: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M7 7h6v6H7z" />
      </svg>
    ),
  },
  {
    name: 'Qwap',
    mark: (
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      </svg>
    ),
  },
  {
    name: 'Testnet',
    mark: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M10 2.5 17 10l-7 7.5L3 10l7-7.5Z" />
      </svg>
    ),
  },
  {
    name: 'DeFi',
    mark: (
      <svg viewBox="0 0 22 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 16V6l4.5 6L11 6l4.5 6L20 6v10" />
      </svg>
    ),
  },
  {
    name: 'Web3',
    mark: (
      <svg viewBox="0 0 22 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 5l3.5 11L9 8l3.5 8L16 5" />
        <circle cx="19" cy="7" r="1.6" />
      </svg>
    ),
  },
]