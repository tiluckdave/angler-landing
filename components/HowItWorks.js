import Image from 'next/image'

export default function HowItWorks() {
    return (
        <div className="container flex flex-col gap-12 md:gap-20 mx-auto mt-20 md:mt-36 mb-16 md:mb-28 ">
            <h2 className="text-5xl font-bold text-center">How it Works</h2>
            <div className="flex flex-col gap-8">
                <div className="w-100 bg-neutral-200 mx-4 md:mx-0 shadow-md rounded-3xl">
                    <div className='w-full p-8 flex flex-col gap-4'>
                        <h3 className='bg-gradient-to-bl from-blue-800 to-sky-700 text-transparent bg-clip-text font-bold text-3xl md:text-4xl'>Import</h3>
                        <p className='text-black text-md md:text-lg'>Seamlessly import data from anywhere and maintain a single source of truth for product information.</p>
                    </div>
                    <Image src="/import.png" alt="Import" width="0" height="0" sizes="100vw" className="w-full hidden md:block" />
                    <Image src="/importmd.png" alt="Import" width="0" height="0" sizes="100vw" className="w-full md:hidden block" />
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 mx-4 md:mx-0 bg-gradient-to-bl from-blue-800 to-sky-700 rounded-3xl shadow-md">
                        <div className='w-full p-8 flex flex-col gap-4'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl'>Enrich</h3>
                            <p className='text-white text-md md:text-lg'>Automatically enrich product images, descriptions, and attributes to improve discoverability and conversion.</p>
                        </div>
                        <Image src="/enrich.png" alt="Enrich" width="0" height="0" sizes="100vw" className="w-full" />
                    </div>
                    <div className="md:w-1/2 mx-4 md:mx-0 bg-gradient-to-tr from-blue-800 to-sky-700 rounded-3xl shadow-md">
                        <div className='w-full p-8 flex flex-col gap-4'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl'>Publish</h3>
                            <p className='text-white text-md md:text-lg'>Generate a clean data feed to publish detailed product listings to your storefront and distribution channels.</p>
                        </div>
                        <Image src="/publish.png" alt="Publish" width="0" height="0" sizes="100vw" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}