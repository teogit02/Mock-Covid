import { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { dark } from './dark'
import { light } from './light'

const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    transition: all 200ms;    
  }
`

function Theme(props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Global />
      <button onClick={toggleTheme}>Toggle Theme</button>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme