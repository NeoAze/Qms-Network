import { useEffect, useState } from 'react'
import { Close, Menu } from './icons.jsx'
import './Navbar.css'

const links = [
  { label: 'Qwap', href: 'https://testnet.qwap.xyz/' },
  { label: 'Faucet', href: 'https://faucet.testnet.qms.finance/' },
  { label: 'Deployment', href: 'https://qms-smart-contract-deployment.vercel.app/' },
  { label: 'Explorer', href: 'https://testnet.qmsscan.io/' }, // Docks yerinə Explorer əlavə edildi
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav">
      <a className="nav__brand" href="#main">
        <img src="/QMS-Network-LOGO.webp" alt="QMS Logo" className="nav__logo" />
        <span>QMS NETWORK</span>
      </a>

      <div className="nav__right-group">
        <nav className="nav__pill" aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav__burger"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}