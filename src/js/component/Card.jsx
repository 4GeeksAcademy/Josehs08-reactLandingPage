import React from "react";

export const Card = ({ resolucion }) => {
    let imgLink = `https://picsum.photos/${resolucion}`
    return (
        <div className="card rounded d-flex">
            <div className="cardHeader">
                <img src={imgLink} className="card-img-top rounded" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button className="btn">Find Out More!</button>
            </div>
        </div>
    )
}