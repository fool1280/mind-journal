
const Home = () => {

    return ( 
        <section className="home">
            <div class="hero-section">
                <div class="hero-1">
                    <h1 class="hero-title">
                        Capture your thoughts/emotions frictionlessly!<span className="dot">.</span>
                    </h1>
                    <p class="hero-paragraph">
                        Mind-Journal is a comprehensive tool that empowers people to practice deliberate mindfulness and boost vibes by sending users good memories regularly.
                    </p>
                    <div className="sign-in">Claim a Plot</div>

                </div>
                <div class="hero-illustration">
                    <img src={"/eth-logo-black.png"} alt="ddd"/>
                </div>
            </div>
        </section>
     );
}
 
export default Home;