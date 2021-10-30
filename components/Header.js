import Image from 'next/image';
import {SearchIcon , GlobeAltIcon , MenuIcon , UserIcon , UserCircleIcon} from '@heroicons/react/solid';

function Header() {
    return (
        <header className=" bg-white sticky top-0 z-50 p-5 grid grid-cols-3 shadow-md md:px-10">
            {/* left */}
            <div className="relative flex h-10 items-center cursor-pointer my-auto ">
                <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
            </div>

            {/* middle */}
            <div className="flex items-center md:border-2 rounded-full p-2 md:shadow-sm">
                <input type="text" placeholder="Start your Search" className=" pl-5 bg-transparent outline-none flex-grow text-gray-600" />
                <SearchIcon  className="h-8 bg-red-400 text-white rounded-full p-2  hidden md:inline-flex     cursor-pointer" />
            </div>

            {/* right */}
            <div className="flex gap-x-4 items-center justify-end text-gray-500">
                <p className="text-xl hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="p-5 border-2 shadow-sm flex gap-2  rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>

        </header>
    )
}

export default Header
