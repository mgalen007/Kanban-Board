import { House, UserRound, Settings, Presentation, LogOut } from 'lucide-react'

interface SideBarProps {
    active: "home" | "profile" | "settings"
}

const SideBar = ({ active }: SideBarProps) => {
    return (
        <nav className="bg-[#1e0058] border w-fit fixed left-0 h-full px-5 flex flex-col justify-between py-5 items-center">
            <div>
                <Presentation size={50} color="#FFF" strokeWidth={1} />
            </div>
            <div 
                className="h-[25%] flex flex-col justify-between w-fit"
            >
                <div
                    className={`p-3 rounded-[50%] ${(active == "home" && "bg-[#734edc]")}`}
                >
                    <House 
                        size={30}
                        color="#FFF"
                        strokeWidth={1}
                    />
                </div>
                <div
                    className={`p-3 rounded-[50%] ${(active == "profile" && "bg-[#734edc]")}`}
                >
                    <UserRound
                        size={30} 
                        color="#FFF" 
                        strokeWidth={1} 
                    />
                </div>
                <div
                    className={`p-3 rounded-[50%] ${(active == "settings" && "bg-[#734edc]")}`}
                >
                    <Settings 
                        size={30} 
                        color="#FFF" 
                        strokeWidth={1} 
                    />
                </div>
            </div>
            <div 
                className="w-fit"
            >
                <LogOut 
                    size={30} 
                    color="#FFF" 
                    strokeWidth={1} 
                />
            </div>
        </nav>
    )
}

export default SideBar