import React from "react";
import "./Section.css"
//import {translate} from "react-switch-lang"
function Section ({ title, subtitle, dark, id}) {

    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}
export default Section;
