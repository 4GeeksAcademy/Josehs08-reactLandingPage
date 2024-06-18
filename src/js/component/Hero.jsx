import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";


export const Hero = () => {
  return (
    <div className="row align-items-center mt-5 p-5 rounded" id="hero">
      <div className="col">
        <h1 className="display-1 fw-bold text-body-emphasis lh-1 mb-3" id="hero-title">Left-aligned hero</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-flex justify-content-start">
          <button type="button" className="btn btn-lg px-4 me-md-2">Call to action!</button>
        </div>
      </div>
    </div>
  );
};
