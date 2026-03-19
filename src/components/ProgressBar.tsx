import { type CSSProperties } from 'react'

interface ProgressBarProps {
    progress: number
}

const ProgressBar = ({progress}: ProgressBarProps) => {
    return (
        <div
            className="border border-white relative"
        >
            <p
                className="absolute right-0 text-sm text-black/40"
            >
                {progress}%
            </p>
            <div
                className="bg-black/10 h-2 mt-6 rounded-xl w-full"
            >
                <div
                    className="bg-[#754be5] h-full rounded-xl"
                    style={{
                        "width": `${Math.min(100, Math.max(0, progress))}%`
                    } as CSSProperties}
                >
                </div>
            </div>
        </div>
    )
}

export default ProgressBar