import Image from 'next/image';

function MediumCard(img , title) {
    return (
        <div className="flex  items-center hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out m-2 mt-5 space-y-2 shadow-md rounded-xl cursor-pointer">
            <div className="relative h-40 w-40">
                <Image src={img} layout="fill" className="rounded-lg" />
            </div>
            <div>
                <h1 className="text-xl">{title}</h1>
            </div>
        </div>
    )
}

export default MediumCard
