import { ChartNoAxesCombined, CalendarClock, Bell, SquarePen, ChevronDown } from 'lucide-react'
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

    const radius = 67
    const circumference = 2 * Math.PI * radius
    const offset = circumference * (1 - totalProgress / 100)

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
                        <circle 
                            cx="97" 
                            cy="95" 
                            r="67" 
                            strokeWidth="4" 
                            stroke="#d0d0ff" 
                            fill="#e5e5ff"
                        ></circle>
                        <circle
                            cx="97"
                            cy="95"
                            r="67"
                            strokeWidth="4"
                            stroke="#754be5"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            style={{ transition: "stroke-dash-offset .5s ease" }}
                        ></circle>
                    </svg>
                    <div
                        className="bg-white/75 w-[50%] h-[50%] absolute top-12 left-12 rounded-[50%] flex items-center justify-center"
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
                    className="border border-gray-300 h-[50%] rounded-xl flex gap-2 items-center pl-6"
                >
                    <div
                        className="rounded-lg w-fit p-2 bg-[#754be5] h-[42%]"
                    >
                        <CalendarClock 
                            color="white"
                        />
                    </div>
                    <div
                        className="ml-2 w-fit"
                    >
                        <h3
                            className="text-[15px] font-medium text-black/60"
                        >
                            {new Date().toDateString()}
                        </h3>
                        <p
                            className="font-medium"
                        >
                            08:00 AM - 11:30 AM
                        </p>
                    </div>
                    <div
                        className="mx-auto"
                    >
                        <SquarePen 
                            className="cursor-pointer"
                            color="gray"
                        />
                    </div>
                </div>
                <div
                    className="border border-gray-300 h-[50%] rounded-xl flex items-center"
                >
                    <div
                        className="w-fit ml-6 p-2 rounded-lg bg-[#1c5eff] relative h-[42%]"
                    >
                        <div
                            className="rounded-[50%] border w-5 h-5 flex items-center justify-center absolute top-[-1vh] right-[-1vh] pb-[1px] text-white font-medium bg-red-600"
                        >
                            {0}
                        </div>
                        <Bell 
                            color="white"
                        />
                    </div>
                    <div
                        className="ml-4 mr-7 self-center"
                    >
                        <h3
                            className="text-[15px] font-medium text-black/60"
                        >
                            Notifications
                        </h3>
                        <p
                            className="font-medium"
                        >
                            (No notifications)
                        </p>
                    </div>
                    <div
                        className="mx-auto"
                    >
                        <ChevronDown 
                            className="cursor-pointer"
                            color="gray"
                        />
                    </div>
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
                className="flex items-center pl-1 mt-[2px]"
            >
                <div
                    className="w-[2%] h-6 rounded-lg mr-2"
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