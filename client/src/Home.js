import { Element } from "react-scroll";

const Home = () => {
    return (
        <div className="container">
            {/*modal section*/}
            <section className="home">
                <div class="hero-section">
                    <div class="hero-1">
                        <h1 class="hero-title">
                            Capture your thoughts/emotions frictionlessly!
                            <span className="dot">.</span>
                        </h1>
                        <p class="hero-paragraph">
                            M-J is a comprehensive tool that empowers people to
                            practice deliberate mindfulness and boost vibes by
                            sending users good memories regularly.
                        </p>
                        <p>
                            okay, cool but why should i care about recording my
                            thoughts? here's why
                        </p>
                    </div>
                    <div class="hero-illustration">
                        <img src={"/illustration-1.png"} alt="ddd" />
                    </div>
                </div>
            </section>

            {/* add "how-it-works" section*/}
            {/* add "features" section*/}
            {/* add FAQ section */}

            {/*---------- tried doing something but it didn't work *----------/}

            {/* <Element id='how-iw' name='example-destination'>
            // wrap your content in the Element from react-scroll
            <section id="how-iw">

                <div style={{border: "1px solid black"}}></div>


            </section> 
            </Element> */}
        </div>
    );
};

export default Home;
