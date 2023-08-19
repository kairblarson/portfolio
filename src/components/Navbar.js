import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ aboutRef, projectsRef, homeRef, contactRef }) => {
    return (
        <nav className="navbar">
            {/* <img src='file://D:/random%20stuff/All%20downloads/undraw_pic_profile_re_7g2h.svg' /> */}
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
