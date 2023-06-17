const [mode, setMode] = useState('false')
const [theme, setTheme] = useState('darkMode')


function toggleMode() {
  if (theme === 'darkMode') {
    setTheme('lightMode')

    // setMode('Dark Mode')

  }
  if (theme === 'lightMode') {
    setTheme('darkMode')
    // setMode('Light Mode')
  }
}