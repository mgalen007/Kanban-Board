import { useState } from 'react'
import React from 'react'
import SideBar from './components/SideBar.tsx'
import SearchBar from './components/SearchBar.tsx'
import Board from './components/Board.tsx'
import SidePanel, { type TaskStat } from './components/SidePanel.tsx'

const taskStats: TaskStat[] = [
  { category: "total", amount: 144 },
  { category: "completed", amount: 56 },
  { category: "in progress", amount: 72 },
  { category: "waiting", amount: 24 }
]

const App = () => {

  const [activeIcon, setActiveIcon] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div
      className="flex h-screen"
    >
      <SideBar 
        active={activeIcon} 
        onIconClick={setActiveIcon} 
      />
      <div
        className="flex-1 grid grid-cols-[70%_30%] overflow-hidden"
      >
        <div
          className="overflow-y-auto"
        >
          <SearchBar 
            placeholder="Search" 
            onChange={handleSearch} 
            value={searchQuery} 
          />
          <Board />
        </div>
        <SidePanel
          username="John Doe" 
          taskStats={taskStats}
          totalProgress={100}
        />
      </div>
    </div>
  )
}

export default App