import React, { useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Popup = ({ children, active, emailSent }) => {
    return (
        <div
            className="popup"
            style={{
                right: active ? "20px" : "-500px",
                background: emailSent ? "#03c03c" : "red",
                color: "white",
            }}
        >
            {children}
            {emailSent ? <AiOutlineCheckCircle size={20}/> : <AiOutlineCloseCircle size={20}/>}
        </div>
    );
};

export default Popup;
