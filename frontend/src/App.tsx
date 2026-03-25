import SideBar from './components/SideBar.tsx'
import SearchBar from './components/SearchBar.tsx'
import Board from './components/Board.tsx'
import SidePanel, { type TaskStat } from './components/SidePanel.tsx'
import { getData, type Data, type GetDataParams } from './utils/dataService.ts'
import { useState, useEffect } from 'react' 

const taskStats: TaskStat[] = [
  { category: "total", amount: 144 },
  { category: "completed", amount: 56 },
  { category: "in progress", amount: 72 },
  { category: "waiting", amount: 24 }
]

const params: GetDataParams = {
  userID: localStorage.getItem('userID'),
  sessionID: localStorage.getItem('sessionID'),
  endTime: localStorage.getItem('endTime'),
  token: localStorage.getItem('token')
}

const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

const App = () => {
  useEffect(async (): Promise<void> => {
    try {
      setLoading(true)
      const data = await getData(params)
      if (!data) setError(true)
      setData(data)
      setLoading(false)
    } catch(err) {
      console.error(err)
      setError(true)
    }
  }, [])

  return (
    <div
      className="flex h-screen"
    >
      <SideBar />
      <div
        className="flex-1 grid grid-cols-[70%_30%] overflow-hidden"
      >
        <div
          className="overflow-y-auto"
        >
          <SearchBar 
            placeholder="Search" 
          />
          <Board />
        </div>
        <SidePanel
          username="John Doe" 
          taskStats={taskStats}
          totalProgress={72}
        />
      </div>
    </div>
  )
}

export default App