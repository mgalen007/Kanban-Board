import { Search } from 'lucide-react'
import React from 'react'

interface SearchBarProps {
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
}

const SearchBar = ({ placeholder, onChange, value }: SearchBarProps) => {
    return (
        <div
            className="fixed left-32 top-5 w-[20%]"
        >
            <Search
                color="gray"
                className="absolute top-2 left-3"
            />
            <input 
                type="text" 
                placeholder={placeholder} 
                name="search-bar"
                value={value}
                onChange={onChange}
                className="border border-black/20 bg-white rounded-3xl w-full pr-4 py-2 pl-10 focus:border-gray-500 focus:outline-none"
            ></input>
        </div>
    )
}

export default SearchBar