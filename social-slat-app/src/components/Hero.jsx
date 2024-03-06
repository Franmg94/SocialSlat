import HeroVideo from "../assets/video/hero-video.mp4";

function Hero() {
  return (
    <section className=" text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center ">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* TEXT */}
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl drop-shadow-sm -mt-40">
              Make your
              <span className="sm:block"> Social Slat. </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed drop-shadow-lg">
              Find the event that you need happening around you
            </p>

            {/* VIDEO */}
            <div className="absolute inset-0 w-full h-full bg-white/10">
              <video
                src={HeroVideo}
                type="video/mp4"
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover -z-10 mt-10"
              ></video>
            </div>

          </div>
      </div>
    </section>
  );
}

export default Hero;
