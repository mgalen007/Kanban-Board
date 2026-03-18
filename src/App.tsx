import { useState } from 'react'
import SideBar from './components/SideBar.tsx'

const App = () => {
  const [activeIcon, setActiveIcon] = useState('home')

  return (
    <div>
      <SideBar active={activeIcon} onIconClick={setActiveIcon} />
    </div>
  )
}

export default App