import React from "react";
import { Card } from "./Card";

export const CardGroup = () => {
    return (
        <div className="card-group gap-5" id="album">
            <Card resolucion="500/325" />
            <Card resolucion="500/326" />
            <Card resolucion="500/327" />
            <Card resolucion="500/328" />
        </div>
    )
}