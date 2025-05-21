"use client";
import "./Contact.scss";
import React from "react";
import { data } from "./data";
import Form from "./Form";
import NavBar from "../Navbar/NavBar";


const Contact = () => {
    return (
        <div className="container">
            <div className="navbar"><a href="/"><img className="inner_logo" src="/assets/logo.png" alt="mi terra logo" /></a></div>
            <div className="contactContainer">
                <div className="textContainer" >
                    <h1>
                        Envíe su{" "}
                        <span >
                            {" "}
                            Consulta
                        </span>
                    </h1>
                    {data.map((e, i) => (
                        <div className="item" key={i}>
                            <a href={e.url} target="_blank">
                                <h2>{e.title}</h2>
                                <span>{e.text}</span>
                            </a>
                        </div>
                    ))}
                </div>
                <Form />
            </div>
            <div className="navbar"></div>
        </div>
    );
};

export default Contact;
