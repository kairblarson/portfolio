import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from "react-device-detect";

const Navbar = ({ aboutRef, projectsRef, homeRef, contactRef }) => {
    const [menuState, setMenuState] = useState(false);

    useEffect(() => {
        const windowWidth = window.addEventListener("resize", (e) => {
            if (e.currentTarget.innerWidth < 800) setMenuState(false);
        });
        const onScroll = window.addEventListener("scroll", (e) => {
            setMenuState(false);
        });

        return () => {
            window.removeEventListener("resize", windowWidth);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <div
                className="menu"
                style={{
                    right: menuState ? "0" : "-1000px",
                }}
            >
                <div className="menu-item">HOME</div>
                <div className="menu-item">ABOUT</div>
                <div className="menu-item">PROJECTS</div>
                <div className="menu-item">CONTACT</div>
            </div>
            <div className="icon-container">
                <img
                    src="assets/large-icon.png"
                    placeholder="could not load image"
                    className="icon"
                    onClick={() => {
                        const scroll =
                            homeRef.current.getBoundingClientRect().top - 50;
                        window.scrollTo({
                            top: scroll,
                            behavior: "smooth",
                        });
                    }}
                />
            </div>
            <div
                className="menu-button-container"
                onClick={() => setMenuState((prev) => !prev)}
                style={{ paddingRight: isMobile ? "1.5em" : "2.5em" }}
            >
                <CgMenu className="menu-button" size={35} />
            </div>
            <section className="nav-items">
                <ul style={{ all: "inherit" }}>
                    <li className="nav-item">
                        <button
                            style={{ all: "inherit" }}
                            onClick={() => {
                                const scroll =
                                    homeRef.current.getBoundingClientRect()
                                        .top - 50;
                                window.scrollTo({
                                    top: scroll,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            HOME
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            style={{ all: "inherit" }}
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
                            ABOUT
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            style={{ all: "inherit" }}
                            onClick={() => {
                                const scroll =
                                    projectsRef.current.getBoundingClientRect()
                                        .top - 50;
                                window.scrollTo({
                                    top: scroll,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            PROJECTS
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            style={{ all: "inherit" }}
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
                            CONTACT
                        </button>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
