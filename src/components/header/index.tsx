import Link from "next/link";

export default function Header() {
    return (
        <header className="flex bg-gradient-to-r from-blue-950 to-blue-800 p-3 pr-8 flex-row justify-between items-center">
            <img src="/images/nib.png" width={100}/>
            <ul className="flex flex-row gap-10 text-gray-300 font-semibold uppercase items-center">
                <li className="hover:text-white relative">
                    <Link href={''} 
                    className="
                    hover:text-white 
                    before:content-[''] 
                    before:absolute 
                    before:top-6
                    before:left-0
                    before:w-full
                    before:h-[3px]
                    before:bg-rose-500
                    before:scale-x-0
                    before:origin-bottom-left
                    before:transition-transform
                    before:duration-500
                    before:rounded-full
                    hover:before:scale-x-100
                    "
                    >
                        Quem Somos?
                    </Link>
                </li>

                <li className="hover:text-white relative">
                    <Link href={''}
                    className="
                    hover:text-white 
                    before:content-[''] 
                    before:absolute 
                    before:top-6
                    before:left-0
                    before:w-full
                    before:h-[3px]
                    before:bg-rose-500
                    before:scale-x-0
                    before:origin-bottom-left
                    before:transition-transform
                    before:duration-500
                    before:rounded-full
                    hover:before:scale-x-100
                    "
                    >
                        Meditação
                    </Link>
                </li>

                <li className="hover:text-white relative">
                    <Link href={''}
                    className="
                    hover:text-white 
                    before:content-[''] 
                    before:absolute 
                    before:top-6
                    before:left-0
                    before:w-full
                    before:h-[3px]
                    before:bg-rose-500
                    before:scale-x-0
                    before:origin-bottom-left
                    before:transition-transform
                    before:duration-500
                    before:rounded-full
                    hover:before:scale-x-100
                    "
                    >
                        Eventos
                    </Link>
                </li>
                <li className="flex flex-row gap-5">
                    <Link href={''}><img src="/images/icons/youtube.png" width={25}/></Link>
                    <Link href={''}><img src="/images/icons/instagram.png" width={25}/></Link>
                    <Link href={''}><img src="/images/icons/spotify.png" width={25}/></Link>
                </li>
                <li className="bg-yellow-400 py-1 px-2 rounded-md text-white hover:bg-blue-500 transition-colors duration-500">
                    <Link href={''}>Contato</Link>
                </li>
            </ul>
        </header>
    )
    
}