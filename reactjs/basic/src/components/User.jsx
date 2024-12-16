import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const User = () => {

  const themeData = useContext(ThemeContext)
  const {theme, setTheme} = themeData

  console.log(themeData)

  return (
    <div>
        <ul className={theme}>
            <li>username : amateur </li>
            <li>age : 23</li>
            <li>address : TH</li>
        </ul>

        <div>
            <button onClick ={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change Theme</button>
        </div>
    </div>
  )
}


export default User