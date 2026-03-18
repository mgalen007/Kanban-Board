import { type ReactNode } from 'react'
import { House, UserRound, Settings, Presentation, LogOut } from 'lucide-react'

interface SideBarProps {
    active: string
    onIconClick: (name: string) => void
}

interface Icon {
    name: string
    node: ReactNode
}

const SideBar = ({ active, onIconClick }: SideBarProps) => {

    const icons: Icon[] = [
        { name: 'logo', node: <Presentation size={50} color="#FFF" strokeWidth={1} /> },
        { name: 'home', node: <House size={30} color="#FFF" strokeWidth={1} /> },
        { name: 'profile', node: <UserRound size={30} color="#FFF" strokeWidth={1} /> },
        { name: 'settings', node: <Settings size={30} color="#FFF" strokeWidth={1} /> },
        { name: 'logout', node: <LogOut size={30} color="#FFF" strokeWidth={1} /> }
    ]

    let optionIcons = [icons[1], icons[2], icons[3]]

    return (
        <nav className="bg-[#1e0058] border w-fit fixed left-0 h-full px-5 flex flex-col justify-between py-5 items-center">
            <div>
                {icons[0].node}
            </div>
            <div
                className="h-[30%] flex flex-col justify-between items-center"
            >
                {optionIcons.map(icon => {
                    return (
                        <div
                            key={icon.name}
                            className={`${active == icon.name && "p-3 rounded-[50%] bg-[#724ddc]"}`}
                            onClick={() => onIconClick(icon.name)}
                        >
                            {icon.node}
                        </div>
                    )
                })}
            </div>
            <div>
                {icons[4].node}
            </div>
        </nav>
    )
}

export default SideBar