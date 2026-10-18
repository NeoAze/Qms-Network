import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

export default function App() {
  // İlk vəziyyət false (yəni oxuyur kimi göstəririk)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.08 // Səsin həcmi sakitdir

    // 1. Sayt açılan kimi musiqini başlatmağa çalışırıq
    const playPromise = audio.play()

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // 2. Əgər brauzer blokladısa, ekranın hər hansı yerinə ilk klik edildikdə başladırıq
        const startAudioOnFirstClick = () => {
          audio.play().then(() => {
            setIsMuted(false) // Səs uğurla başladı, ikon rəqs edən xətlərə çevrilsin
          }).catch((e) => console.log("Səs başlamadı:", e))
          
          // İlk klikdən sonra bu dinləyicini silirik ki, hər klikdə təkrar işləməsin
          document.removeEventListener('click', startAudioOnFirstClick)
        }

        document.addEventListener('click', startAudioOnFirstClick)
      })
    }
  }, [])

  // İstifadəçi ikona klikləyəndə sadəcə Mute/Unmute edirik
  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.muted = false
      audio.play().catch(() => {})
      setIsMuted(false)
    } else {
      audio.muted = true
      setIsMuted(true)
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
      </main>

      <audio ref={audioRef} src="/click.mp3" loop />

      {/* Sol aşağı küncdəki Musiqi Düyməsi */}
      <button 
        onClick={toggleMute} 
        className={`music-toggle ${isMuted ? 'is-muted' : 'is-playing'}`}
        aria-label={isMuted ? "Səsi aç" : "Səsi bağla"}
      >
        <div className="music-waves">
          <span></span><span></span><span></span>
        </div>

        <svg className="music-muted-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
          <line x1="2" y1="2" x2="22" y2="22"></line>
        </svg>
      </button>
    </>
  )
}