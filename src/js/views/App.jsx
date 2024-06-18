import React from "react";

import { Navbar } from "../component/Navbar";
import { Hero } from "../component/Hero";
import { CardGroup } from "../component/CardGroup";
import { Footer } from "../component/Footer";


export const App = () => {
    return (
        <div className="container-fluid p-5 g-3">
            <Navbar />
            <Hero />
            <hr className="my-5" />
            <CardGroup />
            <hr className="my-5" />
            <Footer />
        </div>
    )
}