import { type ReactNode } from 'react'
import { Presentation, LogOut } from 'lucide-react'


interface Icon {
    name: string
    node: ReactNode
    title: string
}

const SideBar = () => {

    const icons: Icon[] = [
        { name: 'logo', node: <Presentation size={40} color="#FFF" strokeWidth={1} />, title: "Kanban Board" },
        { name: 'logout', node: <LogOut size={25} color="#FFF" strokeWidth={1} />, title: "Log Out" }
    ]

    return (
        <nav className="bg-[#1e0058] border w-fit h-[100vh] px-5 flex flex-col justify-between py-5 pb-8 items-center">
            {icons.map(icon => {
                return (
                    <div
                        title={icon.title}
                        key={icon.name}
                    >
                        {icon.node}
                    </div>
                )
            })}
        </nav>
    )
}

export default SideBar