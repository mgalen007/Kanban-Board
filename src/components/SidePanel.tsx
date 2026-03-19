import { ChartNoAxesCombined } from 'lucide-react'
import { type CSSProperties } from 'react'

interface SidePanelProps {
    username: string
    totalProgress: number
    taskStats: TaskStat[]
}

interface TaskStatCardProps {
    type: StatCategory
    amount: number
    key: string
}

export interface TaskStat {
    amount: number
    category: StatCategory
}

type StatCategory = "total" | "completed" | "waiting" | "in progress"

const SidePanel = ({ username, totalProgress, taskStats }: SidePanelProps) => {
    return (
        <div
            className="flex flex-col ml-[80px] mr-7 gap-1 h-[85vh] mt-[12vh]"
        >
            <div
                className="border border-gray-300 h-[70%] rounded-xl"
            >
                <div
                    className="rounded-xl w-[85%] mx-auto mt-5 bg-[#e5e5ff] px-5 py-2 flex items-center justify-between"
                >
                    <div>
                        <h3
                            className="font-medium text-black/60"
                        >
                            Analytics
                        </h3>
                        <h4
                            className="font-medium text-lg"
                        >
                            {username}
                        </h4>
                    </div>
                    <div
                        className="bg-[orange]/80 p-3 rounded-[50%]"
                    >
                        <ChartNoAxesCombined color="#f2f6ff" />
                    </div>
                </div>
                <div
                    className="w-[60%] bg-[#e5e5ff] h-[42%] mx-auto mt-3 rounded-[50%] relative"
                >
                    <svg width="167" height="165">
                        <circle cx="97" cy="95" r="67" strokeWidth="4" stroke="#e703f8" fill="#e5e5ff"></circle>
                    </svg>
                    <div
                        className="bg-white w-[50%] h-[50%] absolute top-12 left-12 rounded-[50%] flex items-center justify-center"
                    >
                        <h3
                            className="text-black font-bold text-xl"
                        >
                            {totalProgress}%
                        </h3>
                    </div>
                </div>
                <div
                    className="h-[30%] mt-4 flex flex-wrap justify-center gap-2"
                >
                    {taskStats.map(stat => {
                        return (
                            <TaskStatCard
                                key={stat.category}
                                type={stat.category}
                                amount={stat.amount}
                            />
                        )
                    })}
                </div>
            </div>
            <div
                className="h-[30%] flex flex-col gap-1"
            >
                <div
                    className="border border-gray-300 h-[50%] rounded-xl"
                >
                </div>
                <div
                    className="border border-gray-300 h-[50%] rounded-xl"
                >
                </div>
            </div>
        </div>
    )
}

const TaskStatCard = ({ type, amount, key }: TaskStatCardProps) => {

    const color = type == "completed" ? "#ff8000" :
                  type == "in progress" ? "#fc0398" :
                  type == "waiting" ? "#e703f8" : "#0000FF"

    return (
        <div
            key={key}
            className="rounded-xl w-[40%] py-2 px-3"
            style={{
                "background-color": `${color}1A`
            } as CSSProperties}
        >
            <h3
                className="text-sm font-medium text-black/60"
            >
                {type.toUpperCase()}
            </h3>
            <div
                className="flex items-center pl-1"
            >
                <div
                    className="w-[2%] h-5 rounded-lg mr-2"
                    style={{
                        "border-left": `4px solid ${color}8A`
                    } as CSSProperties}
                >
                </div>
                <p
                    className="w-fit font-medium"
                >
                    {amount}
                </p>
            </div>
        </div>
    )
}

export default SidePanel