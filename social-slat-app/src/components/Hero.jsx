import HeroVideo from "../assets/video/hero-video.mp4";

function Hero() {
  return (
    <section className="">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        {/* VIDEO */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <video
            src={HeroVideo}
            type="video/mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          ></video>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* TEXT */}
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl -mt-40">
            Make your
            <span className="sm:block"> Social Slat. </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white drop-shadow-lg">
            Find the event that you need happening around you
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
