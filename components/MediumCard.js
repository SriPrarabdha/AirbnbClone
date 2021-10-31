import Image from 'next/image';

function MediumCard({img , title}) {
    return (
        <div className="flex  flex-col items-center hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out m-2 mt-5 space-2 shadow-md rounded-xl cursor-pointer  ">
            <div className="relative h-80 w-80 ">
                <Image src={img} layout="fill" className="rounded-lg" />
            </div>
            <div>
                <h1 className="text-2xl mt-3 ">{title}</h1>
            </div>
        </div>
    )
}

export default MediumCard
