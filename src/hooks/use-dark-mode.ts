import { useEffect } from 'react'
import { useLocalStorage, useMediaQuery, useUpdateEffect } from '.'

// See: https://usehooks-ts.com/react-hook/use-local-storage
// See: https://usehooks-ts.com/react-hook/use-media-query
// See: https://usehooks-ts.com/react-hook/use-update-effect

interface UseDarkModeOutput {
  isDarkMode: boolean
  toggle: () => void
  enable: () => void
  disable: () => void
}

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>('dark-mode', defaultValue ?? isDarkOS ?? false)
  const body = window.document.body;

  /* Update in darkMode if os prefers changes */
  useUpdateEffect(() => {
    setDarkMode(isDarkOS)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS])

  /* Update body class depending of local storage theme value */  
  useEffect(() => {
    if (isDarkMode) body.classList.add("darkMode");
    else body.classList.remove("darkMode");
  })

  return {
    isDarkMode,
    toggle: () => setDarkMode(prev => !prev),
    enable: () => setDarkMode(false),
    disable: () => setDarkMode(true),
  }
}

export default useDarkMode