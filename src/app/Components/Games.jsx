import Image from 'next/image'
import Link from 'next/link'

const Games = () => {
    return (
        <div>
            {/* Featured Games Section */}
            <div className="mt-6">
                <h2 className="md:text-xl font-bold mb-2 text-white text-center md:text-left">Chicken Road
                Games</h2>
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">

                    <Link href="/game" className=" rounded-lg ">
                        <Image className="w-full  mx-auto" src={"/11.webp"} width={2000} height={500} alt="Game Image" />
                        <p className= " text-xs lg:text-lg font-semibold bg-[#361602] p-2 text-white text-center">Play For Real</p>
                    </Link>

                    <Link href="/demo" className=" rounded-lg ">
                        <Image className="w-full  mx-auto" src={"/10.jpg"} width={2000} height={500} alt="Game Image" />
                        <p className= " text-xs lg:text-lg font-semibold bg-[#361602] p-2 text-white text-center">Play For Demo</p>
                    </Link>
            
                </div>
            </div>
        </div>
    )
}

export default Games
