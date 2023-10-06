"use client";

import { Children } from "react";

export default function Media({ logo, name, location, children }) {

    let childrenAsHTML = Children.map(children, ({ props }, index) => (
        <li className="py-0 my-0 mt-2" key={index}>
            {props.children} <small className="text-secondary">{props.when}</small>
        </li>
    ));

    return (
        <div className="d-flex my-3">
            <div className="flex-shrink-0 d-none d-sm-block me-2">
                <img
                    src={logo}
                    alt="logo"
                    width={44}
                    height={44}
                    className="img-fluid rounded border"
                />
            </div>
            <div className="flex-grow-1 border-bottom">
                <div className="py-0 px-0">
                    <h6 className="py-0 my-0 fw-bold">{name}</h6>
                    <p className="py-1 my-0 text-secondary">{location}</p>
                    <ul className="mt-2">
                        {childrenAsHTML}
                    </ul>
                </div>
            </div>
        </div>
    );
}
