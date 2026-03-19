import Button from './Button.tsx'
import TaskCard, { type TaskCardProps } from './TaskCard.tsx'


const tasks: TaskCardProps[] = [
    { title: "Web Design", description: "Wireframing, mockups, client collaboration", progress: 47 },
    { title: "Mobile App", description: "Wireframing, mockups, client collaboration", progress: 78 },
    { title: "Dashboard", description: "Wireframing, mockups, client collaboration", progress: 75 },
    { title: "App Development", description: "Wireframing, mockups, client collaboration", progress: 67 },
    { title: "Dashboard", description: "Wireframing, mockups, client collaboration", progress: 33 },
    { title: "Landing Page", description: "Wireframing, mockups, client collaboration", progress: 20 },
    { title: "Mobile App", description: "Wireframing, mockups, client collaboration", progress: 92 },
    { title: "Web Development", description: "Wireframing, mockups, client collaboration", progress: 81 },
    { title: "App Development", description: "Wireframing, mockups, client collaboration", progress: 58 }
]

const Board = () => {

    return (
        <div
            className="bg-[#ffffff]/10 fixed top-[12vh] left-31 border border-gray-300 rounded-3xl w-[67%] h-[85vh] pb-2"
        >
            <div
                className="mt-3 px-6 flex items-center justify-between"
            >
                <h1
                    className="font-bold tracking-tighter text-3xl"
                >
                    Tasks
                </h1>
                <Button text="New Task" />
            </div>
            <div
                className="h-[88%] mt-3 w-[96%] mx-auto grid grid-cols-3 grid-rows-3 gap-3 place-items-center"
            >
                {tasks.map(task => {
                    return (
                        <TaskCard 
                            key={task.title}
                            title={task.title}
                            description={task.description}
                            progress={task.progress}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Board