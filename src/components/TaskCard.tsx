import ProgressBar from './ProgressBar.tsx'

export interface TaskCardProps {
    title: string
    description: string
    progress: number
}

interface TagProps {
    name: string
    type: TagType
}

type TagType = "#0000FF" | "#e703f8" | "#fc0398" | "#ff8000"

const TaskCard = ({title, description, progress}: TaskCardProps) => {
    const tagTypes: TagType[] = ["#fc0398", "#ff8000", "#0000FF", "#e703f8"]
    const randomColor = tagTypes[title.length % tagTypes.length]

    return (
        <div
            className="border bg-[#ffffff] border-gray-300 rounded-xl px-6 py-4 h-full w-full"
        >
            <Tag
                name={title}
                type={randomColor}
            />
            <p>
                {description}
            </p>
            <ProgressBar 
                progress={progress}
            />
        </div>
    )
}

const Tag = ({name, type}: TagProps) => {
    return (
        <div
            className={`w-fit py-[4px] px-4 rounded-3xl mb-3 font-bold`}
            style={{
                color: type,
                backgroundColor: `${type}1A`
            }}
        >
            {name}
        </div>
    )
}

export default TaskCard