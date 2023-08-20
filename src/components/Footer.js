import React from "react";
import { AiFillLinkedin, AiOutlineGithub, AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <section className="footer-icons">
                <AiFillLinkedin size={25} />
                <AiOutlineGithub size={25} />
                <AiTwotoneMail size={25} />
            </section>
            <div
                style={{ width: "80%", height: "1px", background: "white", marginBlock: "2em" }}
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
