import '../styles/header.scss'
import tennisLogo from '../assets/tennis.svg'
import { useState, useEffect } from 'react'

export default function Header({ setCurrentPage }) {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    let handler = () => {
      setOpen(false)
    }

    document.addEventListener("mousedown", handler)
  })

  return (
      <>
        <header className="header">
          <div className="header-container">
            <a
              className="header-container-logo-link"
              onClick={() => setCurrentPage('home')}
            >
              <img className="header-container-logo" src={tennisLogo} alt="Logo E-Portfolio"/>
            </a>
          </div>
          <div className="header-container-test">
            <div className="header-container header-container-navigation">
              <a
                  className="header-container-navigation-link"
                  onClick={() => setCurrentPage('home')}
              >
                Home
              </a>
              <a
                  className="header-container-navigation-link"
                  onClick={() => setCurrentPage('images')}
              >
                Bilder
              </a>
              <a
                  className="header-container-navigation-link"
                  onClick={() => setCurrentPage('video')}
              >
                Video
              </a>
            </div>
            <nav className="header-mobile-navbar">
              <button
                  className="header-mobile-navbar-menu"
                  onClick={() => {setOpen(!open)}}
              >
                    <span className="header-mobile-navbar-icon material-symbols-outlined">
                      menu
                    </span>
              </button>
              <div className={`header-mobile-navbar-content ${open? 'active' : 'inactive'}`}>
                <li className="header-mobile-navbar-content-list-element">
                  <a
                      className="header-container-navigation-link header-mobile-navbar-link"
                      onClick={() => setCurrentPage('home')}
                  >
                    Home
                  </a>
                </li>
                <li className="header-mobile-navbar-content-list-element">
                  <a
                      className="header-container-navigation-link header-mobile-navbar-link"
                      onClick={() => setCurrentPage('images')}
                  >
                    Bilder
                  </a>
                </li>
                <li className="header-mobile-navbar-content-list-element">
                  <a
                      className="header-container-navigation-link header-mobile-navbar-link"
                      onClick={() => setCurrentPage('video')}
                  >
                    Video
                  </a>
                </li>
              </div>
            </nav>
          </div>
        </header>
      </>
  )
}
