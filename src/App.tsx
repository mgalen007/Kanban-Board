import { useState } from 'react'
import React from 'react'
import SideBar from './components/SideBar.tsx'
import SearchBar from './components/SearchBar.tsx'

const App = () => {

  const [activeIcon, setActiveIcon] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
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
    </div>
  )
}

export default App