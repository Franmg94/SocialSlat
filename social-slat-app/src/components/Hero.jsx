import HeroVideo from '../assets/video/hero-video.mp4'

function Hero(){
    return(
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                {/* VIDEO */}
                <div className="absolute  w-full h-full bg-white/10">
                <video src={HeroVideo} type="video/mp4" autoPlay loop muted className="absolute w-full h-full object-cover -z-10" >
                </video>
                </div>

                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 fonr-medium text-gray-900">Get Social and Slut</h1>
                    <p className="mb-8 leading-relaxed">Find the event that you need happening around you</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;