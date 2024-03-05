import HeroVideo from '../assets/video/hero-video.mp4'

function Hero(){
    return(
        <section className="text-gray-600 body-font my-10 border border-solid border-black outline-current:black">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                {/* VIDEO */}
                <div className="absolute  w-full h-full bg-white/10">
                <video src={HeroVideo} type="video/mp4" autoPlay loop muted className="absolute w-full h-full object-cover -z-10 border border-solid border-black outline-current:black" >
                </video>
                </div>

                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 fonr-medium text-gray-900">Get Social and Slut</h1>
                    <p className="mb-8 leading-relaxed">Find the event that you need happening around you</p>
                    
                </div>
            </div>
        </section>
    );
}

export default Hero;