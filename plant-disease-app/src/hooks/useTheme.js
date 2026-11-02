import { useState, useEffect } from 'react'

// decide which theme to start with
function getStartingTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  // otherwise follow the laptop's setting
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function useTheme() {
  const [theme, setTheme] = useState(getStartingTheme)

  // runs every time the theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}

export default useTheme