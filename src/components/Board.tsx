import Button from './Button.tsx'

const Board = () => {
    return (
        <div
            className="bg-white fixed top-[12vh] left-35 border border-gray-300 rounded-3xl w-[67%] h-[83vh]"
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
        </div>
    )
}

export default Board