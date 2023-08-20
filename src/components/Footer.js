import React from "react";
import { AiFillLinkedin, AiOutlineGithub, AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <section className="footer-icons">
                <a
                    href="https://www.linkedin.com/in/kai-larson/"
                    style={{ color: "white" }}
                >
                    <AiFillLinkedin className="footer-icon" />
                </a>
                <a
                    href="https://github.com/kairblarson"
                    style={{ color: "white" }}
                >
                    <AiOutlineGithub className="footer-icon" />
                </a>
                <a
                    href="mailto:kairblarson@gmail.com"
                    style={{ color: "white" }}
                >
                    <AiTwotoneMail className="footer-icon" />
                </a>
            </section>
            <div
                style={{
                    width: "80%",
                    height: "1px",
                    background: "white",
                    marginBlock: "2em",
                }}
            ></div>
            <small style={{ fontSize: ".6em" }}>
                Copyright 2023. Made by{" "}
                <strong style={{ textDecoration: "underline" }}>
                    Kai Larson
                </strong>
            </small>
        </div>
    );
};

export default Footer;
