import "./Styles.css";
import { useTheme } from "../ThemeContext";
import "./Styles.css"

const Switch = () => {
  const { theme, toggleTheme } = useTheme() ; 
  return (
    <label className='switch'>
      <input 
      type='checkbox' 
      checked={theme === 'light'}
      onChange={toggleTheme}/>
      <span className='slider round' />
    </label>
  )
} ;

export default Switch;
