import EventsSection from "../components/EventsSection";
import Hero from "../components/Hero";




function HomePage() {
    return(
        <> 
            <Hero />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 fonr-medium text-gray-900">Events happening</h1>
            <EventsSection />        
        </>
    );
}

export default HomePage;