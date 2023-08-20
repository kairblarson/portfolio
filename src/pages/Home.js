import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useParallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import Popup from "../components/Popup";
import ClipLoader from "react-spinners/ClipLoader";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from "react-device-detect";
import Footer from "../components/Footer";

const Home = () => {
    const heroParallax = useParallax({ translateY: 50, opacity: [1, 0.8] });
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientMessage, setClientMessage] = useState("");
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [emailSent, setEmailSent] = useState(false);
    const [popupState, setPopupState] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmitEmail = () => {
        const nameValid = clientName.trim() != "";
        const emailValid = clientEmail.trim() != "";

        if (!nameValid || !emailValid) {
            setNameValid(false);
            setEmailValid(false);
            return null;
        }

        const templateParams = {
            from_email: clientEmail,
            from_name: clientName,
            message: clientMessage,
        };
        setLoading(true);

        emailjs
            .send("service_jflpc1t", "template_8kgh3hj", templateParams)
            .then(
                function (response) {
                    setLoading(false);
                    setEmailSent(true);
                    setPopupState(true);
                    setClientEmail("");
                    setClientMessage("");
                    setClientName("");

                    setTimeout(() => {
                        setPopupState(false);
                    }, 3000);
                },
                function (error) {
                    setLoading(false);
                    setEmailSent(false);
                    setPopupState(true);

                    setTimeout(() => {
                        setPopupState(false);
                    }, 3000);
                }
            );
    };

    return (
        <div style={{ all: "inherit", overflow: "hidden" }}>
            <Navbar
                homeRef={homeRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
            />
            <div
                className="content"
                ref={homeRef}
                style={{ width: isMobile ? "100vw" : "calc(100vw - 17px)" }}
            >
                <section className="hero">
                    <section className="hero-content" ref={heroParallax.ref}>
                        <h1 className="title">HI, I AM KAI</h1>
                        <h2 className="subtitle">
                            A full stack software engineer that focuses on
                            developing cutting edge mobile and web apps for
                            large enterprises and startups
                        </h2>
                        <div className="home--buttons">
                            <button
                                className="button"
                                onClick={() => {
                                    const scroll =
                                        contactRef.current.getBoundingClientRect()
                                            .top - 50;
                                    window.scrollTo({
                                        top: scroll,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Contact me
                            </button>
                            <button
                                className="button"
                                onClick={() => {
                                    const scroll =
                                        aboutRef.current.getBoundingClientRect()
                                            .top - 50;
                                    window.scrollTo({
                                        top: scroll,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Learn more
                            </button>
                        </div>
                    </section>
                </section>
                <section
                    className="section"
                    name="about_section"
                    ref={aboutRef}
                >
                    <Fade bottom>
                        <h2 className="header">ABOUT ME</h2>
                        <div className="break"></div>
                        <h2
                            className="subtitle"
                            style={{ maxWidth: "1000px", textAlign: "center" }}
                        >
                            In this section you will find more information about
                            me, my current skills and what I bring to the table
                        </h2>
                        <div className="subsection">
                            <section className="group">
                                <h3 className="subheader">Get to know me!</h3>
                                <div>
                                    <p className="subtext">
                                        I'm, a&nbsp;
                                        <strong>
                                            Full Stack Software Engineer
                                        </strong>
                                        &nbsp;specializing in crafting mobile
                                        and web applications. My passion for
                                        coding comes from a love of
                                        problem-solving and turning ideas into
                                        reality.
                                    </p>
                                    <br></br>
                                    <p className="subtext">
                                        I thrive in&nbsp;
                                        <strong>Fast Paced Environments</strong>
                                        &nbsp;and I'm always up for a challenge.
                                        I'm on the lookout for a role that lets
                                        me learn, grow, and contribute to
                                        exciting projects.
                                    </p>
                                </div>
                                <button
                                    className="button"
                                    style={{ marginBottom: "3em" }}
                                    onClick={() => {
                                        const scroll =
                                            contactRef.current.getBoundingClientRect()
                                                .top + 1100;
                                        window.scrollTo({
                                            top: scroll,
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    Contact
                                </button>
                            </section>
                            <section className="group">
                                <h3 className="subheader">My Skills</h3>
                                <div className="subgroup">
                                    <div className="tag">HTML</div>
                                    <div className="tag">CSS</div>
                                    <div className="tag">JavaScript</div>
                                    <div className="tag">React</div>
                                    <div className="tag">React Native</div>
                                    <div className="tag">Node</div>
                                    <div className="tag">Express</div>
                                    <div className="tag">Mongo</div>
                                    <div className="tag">Java</div>
                                    <div className="tag">Springboot</div>
                                    <div className="tag">MySQL</div>
                                    <div className="tag">GIT</div>
                                    <div className="tag">Github</div>
                                </div>
                            </section>
                        </div>
                    </Fade>
                </section>
                <section
                    className="section"
                    name="projects_section"
                    ref={projectsRef}
                    style={{ background: "rgba(0, 0, 0, .03)" }}
                >
                    <h2 className="header">PROJECTS</h2>
                    <div className="break"></div>
                    <h2
                        className="subtitle"
                        style={{ maxWidth: "1000px", textAlign: "center" }}
                    >
                        In this section you will find some of the applications I
                        have developed over the years, and what went into
                        creating them
                    </h2>
                    <Fade bottom>
                        <div
                            className="section"
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
                            }}
                        >
                            <div
                                style={{ width: "100%", marginBottom: "-3em" }}
                                className="subheader-container"
                            >
                                <h3 className="subheader">Termite</h3>
                                <div className="break" />
                            </div>
                            <div className="subsection">
                                <div className="img-carousel">
                                    <img
                                        src="assets/termite1.png"
                                        className="img"
                                    />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "3em",
                                        flexDirection: "column",
                                    }}
                                >
                                    <p className="subtext">
                                        <strong>Termite</strong> is a social
                                        media webapp that i made based on
                                        Twitter. The site has all the same
                                        features as Twitter like posting,
                                        reposting, commenting, direct messaging,
                                        dynamic searching, etc.
                                    </p>
                                    <div className="subgroup">
                                        <div className="tag">JavaScript</div>
                                        <div className="tag">React</div>
                                        <div className="tag">Java</div>
                                        <div className="tag">Springboot</div>
                                        <div className="tag">MySQL</div>
                                        <div className="tag">Hibernate</div>
                                        <div className="tag">Maven</div>
                                        <div className="tag">Framer Motion</div>
                                        <div className="tag">AWS S3</div>
                                        <div className="tag">Railway</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div
                            className="section"
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
                            }}
                        >
                            <div
                                style={{ width: "100%", marginBottom: "-3em" }}
                                className="subheader-container"
                            >
                                <h3 className="subheader">
                                    Expedite Knight Website
                                </h3>
                                <div className="break" />
                            </div>
                            <div className="subsection">
                                <div className="img-carousel">
                                    <img
                                        src="assets/termite1.png"
                                        className="img"
                                    />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "3em",
                                        flexDirection: "column",
                                    }}
                                >
                                    <p className="subtext">
                                        <strong>
                                            The Expedite Knight website
                                        </strong>
                                        is not only a site built to gain
                                        information about the company, it was
                                        also built for customers to get a quote
                                        on a potential delivery and to track
                                        live deliveries they might have.
                                    </p>
                                    <div className="subgroup">
                                        <div className="tag">TypeScript</div>
                                        <div className="tag">React</div>
                                        <div className="tag">Framer Motion</div>
                                        <div className="tag">Docker</div>
                                        <div className="tag">
                                            Google Maps API
                                        </div>
                                        <div className="tag">JWT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade>
                        <div
                            className="section"
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
                            }}
                        >
                            <div
                                style={{ width: "100%", marginBottom: "-3em" }}
                                className="subheader-container"
                            >
                                <h3 className="subheader">Music Matchers</h3>
                                <div className="break" />
                            </div>
                            <div className="subsection">
                                <div className="img-carousel">
                                    <img
                                        src="assets/termite1.png"
                                        className="img"
                                    />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "3em",
                                        flexDirection: "column",
                                    }}
                                >
                                    <p className="subtext">
                                        <strong>Music Matchers</strong> is a pet
                                        project built to match musicians with
                                        each other. I'm a musician myself and
                                        connecting with other musicians is hard
                                        to do so I developed a Tinder style app
                                        that allows you to match with other
                                        musicians in your area based on genres
                                        of interest and what instrument you
                                        play.
                                    </p>
                                    <div className="subgroup">
                                        <div className="tag">JavaScript</div>
                                        <div className="tag">React</div>
                                        <div className="tag">Framer Motion</div>
                                        <div className="tag">Node</div>
                                        <div className="tag">Express</div>
                                        <div className="tag">Passportjs</div>
                                        <div className="tag">MongoDB</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>
            </div>
            <section
                className="section pattern"
                name="section_contact"
                ref={contactRef}
            >
                <h2 className="header">CONTACT</h2>
                <div className="break"></div>
                <h2
                    className="subtitle"
                    style={{ maxWidth: "1000px", textAlign: "center" }}
                >
                    Feel free to contact me by filling out the form below, thank
                    you!
                </h2>
                <div className="section contact-form">
                    <div style={{ width: "100%" }}>
                        <label>Name</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Name"
                            style={{
                                marginTop: "1em",
                                boxShadow: nameValid
                                    ? "none"
                                    : "rgba(250, 0, 0, 0.2) 0px 0px 10px 0px, rgba(250, 0, 0, 0.2) 0px 0px 0px 1px",
                            }}
                            value={clientName}
                            onChange={(e) => {
                                setNameValid(true);
                                setClientName(e.target.value);
                            }}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <label>Email</label>
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            style={{
                                marginTop: "1em",
                                boxShadow: emailValid
                                    ? "none"
                                    : "rgba(250, 0, 0, 0.2) 0px 0px 10px 0px, rgba(250, 0, 0, 0.2) 0px 0px 0px 1px",
                            }}
                            value={clientEmail}
                            onChange={(e) => {
                                setEmailValid(true);
                                setClientEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: "100%",
                        }}
                    >
                        <label>Message</label>
                        <textarea
                            className="textarea"
                            type="email"
                            placeholder="Message"
                            style={{
                                marginTop: "1em",
                            }}
                            value={clientMessage}
                            onChange={(e) => setClientMessage(e.target.value)}
                        />
                    </div>
                    <div style={{ width: "100%", textAlign: "end" }}>
                        <button
                            className="button"
                            onClick={handleSubmitEmail}
                            style={{ width: "8em" }}
                        >
                            {loading ? (
                                <ClipLoader
                                    color={"white"}
                                    loading={loading}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                    size={15}
                                />
                            ) : (
                                <span>SUBMIT</span>
                            )}
                        </button>
                    </div>
                </div>
                <Popup active={popupState} emailSent={emailSent}>
                    {emailSent
                        ? "Email sent successfully"
                        : "Could not send email"}
                </Popup>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
