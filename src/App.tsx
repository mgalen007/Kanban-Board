import { useState } from 'react'
import React from 'react'
import SideBar from './components/SideBar.tsx'
import SearchBar from './components/SearchBar.tsx'
import Board from './components/Board.tsx'

const App = () => {

  const [activeIcon, setActiveIcon] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <SideBar 
        active={activeIcon} 
        onIconClick={setActiveIcon} 
      />
      <SearchBar 
        placeholder="Search" 
        onChange={handleSearch} 
        value={searchQuery} 
      />
      <Board />
    </div>
  )
}

export default App