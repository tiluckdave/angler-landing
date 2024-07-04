import Image from "next/image"

export default function For() {
    return (
        <div className="container mx-auto my-16 md:my-28 flex flex-col gap-8 md:gap-28">
            <h2 className="text-5xl font-bold text-center">Specially Curated For</h2>
            <div className="flex flex-col md:flex-row gap-0 w-100 items-center">
                <div className="bg-neutral-200 shadow mx-4 md:mx-0 rounded-3xl w-100 md:w-1/2 p-6 lg:p-8 flex flex-col gap-6">
                    <h3 className="text-3xl sm:text-4xl md:hidden font-semibold text-transparent bg-gradient-to-tr from-blue-800 to-sky-700 bg-clip-text">Retailers & Marketplaces</h3>
                    <div className="transition bg-white rounded-2xl p-3 lg:p-4 shadow-lg">
                        <Image src="/r&m.png" alt="For Retailers & Marketplaces"
                            width="0" height="0" sizes="100vw" className="w-full" />
                    </div>
                    <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-500 font-semibold">Bring new suppliers online in minutes. Slash your time to market.</p>
                    <div className="text-sm sm:text-md flex md:hidden flex-col gap-2 w-100">
                        <p className="bg-white z-10 border-2 rounded-xl ml-10 p-3 w-100 relative">
                            <span className="z-0 absolute top-1 -left-10 text-5xl font-bold text-neutral-50 font-mono">1</span>
                            Effortlessly collect product information from suppliers or brands.</p>
                        <p className="bg-white z-10 border-2 rounded-xl ml-10 p-3 w-100 relative">
                            <span className="z-0 absolute top-1 -left-10 text-5xl font-bold text-neutral-50 font-mono">2</span>
                            Automatically standardize data to your content specifications.</p>
                        <p className="bg-white z-10 border-2 rounded-xl ml-10 p-3 w-100 relative">
                            <span className="z-0 absolute top-1 -left-10 text-5xl font-bold text-neutral-50 font-mono">3</span>
                            Improve the quality of your product listings to drive conversion.</p>
                        <p className="bg-white z-10 border-2 rounded-xl ml-10 p-3 w-100 relative">
                            <span className="z-0 absolute top-1 -left-10 text-5xl font-bold text-neutral-50 font-mono">4</span>
                            Integrate seamlessly with your existing systems via a product feed.</p>
                    </div>
                </div>
                <div className="hidden w-100 md:w-1/2 md:flex flex-col gap-8">
                    <h3 className="ml-8 lg:ml-12 md:text-3xl lg:text-5xl font-semibold text-transparent bg-gradient-to-tr from-blue-800 to-sky-700 bg-clip-text text-right">Retailers & Marketplaces</h3>
                    <div className="ml-8 lg:ml-12 text-sm lg:text-base flex flex-col gap-3 lg:gap-4 w-100 items-end">
                        <p className="bg-white z-10 border-2 rounded-xl p-2 lg:p-3 w-4/5 mr-8 lg:mr-12 relative">
                            <span className="z-0 absolute top-1.5 -right-8 lg:-right-12 text-4xl lg:text-6xl font-bold text-neutral-300 font-mono">1</span>
                            Effortlessly collect product information from suppliers or brands.</p>
                        <p className="bg-white z-10 border-2 rounded-xl p-2 lg:p-3 w-4/5 mr-8 lg:mr-12 relative">
                            <span className="z-0 absolute top-1.5 -right-8 lg:-right-12 text-4xl lg:text-6xl font-bold text-neutral-300 font-mono">2</span>
                            Automatically standardize data to your content specifications.</p>
                        <p className="bg-white z-10 border-2 rounded-xl p-2 lg:p-3 w-4/5 mr-8 lg:mr-12 relative">
                            <span className="z-0 absolute top-1.5 -right-8 lg:-right-12 text-4xl lg:text-6xl font-bold text-neutral-300 font-mono">3</span>
                            Improve the quality of your product listings to drive conversion.</p>
                        <p className="bg-white z-10 border-2 rounded-xl p-2 lg:p-3 w-4/5 mr-8 lg:mr-12 relative">
                            <span className="z-0 absolute top-1.5 -right-8 lg:-right-12 text-4xl lg:text-6xl font-bold text-neutral-300 font-mono">4</span>
                            Integrate seamlessly with your existing systems via a product feed.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-0 w-100 items-center">
                <div className="hidden w-100 md:w-1/2 md:flex flex-col gap-8">
                    <h3 className="mr-8 lg:mr-12 md:text-3xl lg:text-5xl font-semibold text-transparent bg-gradient-to-tr from-blue-800 to-sky-700 bg-clip-text text-left">Brands</h3>
                    <div className="mr-8 lg:mr-12 text-sm lg:text-base flex flex-col gap-3 lg:gap-4 w-100 items-start">
                        <p className="bg-white z-10 border-2 rounded-xl p-2 lg:p-3 w-4/5 ml-8 lg:ml-12 relative">
                            <span className="z-0 absolute top-1.5 -left-8 lg:-left-12 text-4xl lg:text-6xl font-bold text-neutral-300 font-mono">1</span>
                            Import your products from Shopify, spreadsheets, or your website.</p>
                        <p className="bg-white z-10 border-2 rounded-xl p-2 lg:p-3 w-4/5 ml-8 lg:ml-12 relative">
                            <span className="z-0 absolute top-1.5 -left-8 lg:-left-12 text-4xl lg:text-6xl font-bold text-neutral-300 font-mono">2</span>
                            Generate descriptions, images, and assets consistent with your brand.</p>
                        <p className="bg-white z-10 border-2 rounded-xl p-2 lg:p-3 w-4/5 ml-8 lg:ml-12 relative">
                            <span className="z-0 absolute top-1.5 -left-8 lg:-left-12 text-4xl lg:text-6xl font-bold text-neutral-300 font-mono">3</span>
                            Publish accurate product information to all of your sales channels.</p>
                        <p className="bg-white z-10 border-2 rounded-xl p-2 lg:p-3 w-4/5 ml-8 lg:ml-12 relative">
                            <span className="z-0 absolute top-1.5 -left-8 lg:-left-12 text-4xl lg:text-6xl font-bold text-neutral-300 font-mono">4</span>
                            Optimize your messaging and listing quality to maximize sales.</p>
                    </div>
                </div>
                <div className="bg-neutral-200 shadow mx-4 md:mx-0 rounded-3xl w-100 md:w-1/2 p-6 lg:p-8 flex flex-col gap-6">
                    <h3 className="text-3xl sm:text-4xl md:hidden font-semibold text-transparent bg-gradient-to-tr from-blue-800 to-sky-700 bg-clip-text">Brands</h3>
                    <div className="bg-white shadow-lg rounded-2xl p-3 lg:p-4">
                        <Image src="/brands.png" alt="For Brands"
                            width="0" height="0" sizes="100vw" className="w-full" />
                    </div>
                    <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-500 font-semibold">Enrich and update your products on any channel. Sell more.</p>
                    <div className="text-sm sm:text-md flex md:hidden flex-col gap-2 w-100">
                        <p className="bg-white z-10 border-2 rounded-xl ml-10 p-3 w-100 relative">
                            <span className="z-0 absolute top-1 -left-10 text-5xl font-bold text-neutral-50 font-mono">1</span>
                            Import your products from Shopify, spreadsheets, or your website.</p>
                        <p className="bg-white z-10 border-2 rounded-xl ml-10 p-3 w-100 relative">
                            <span className="z-0 absolute top-1 -left-10 text-5xl font-bold text-neutral-50 font-mono">2</span>
                            Generate descriptions, images, and assets consistent with your brand.</p>
                        <p className="bg-white z-10 border-2 rounded-xl ml-10 p-3 w-100 relative">
                            <span className="z-0 absolute top-1 -left-10 text-5xl font-bold text-neutral-50 font-mono">3</span>
                            Publish accurate product information to all of your sales channels.</p>
                        <p className="bg-white z-10 border-2 rounded-xl ml-10 p-3 w-100 relative">
                            <span className="z-0 absolute top-1 -left-10 text-5xl font-bold text-neutral-50 font-mono">4</span>
                            Integrate seamlessly with your existing systems via a product feed.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}