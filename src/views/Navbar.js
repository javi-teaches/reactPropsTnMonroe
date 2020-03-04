import React from "react";
import NavbarItem from "./NavbarItem"

function Navbar (props) {
    let enlaces = [
        {
            url: "/",
            text: "home"
        },
        {
            url: "/productos",
            text: "productos",
        },
        {
            url: "/contactos",
            text: "contactos",

        }
    ]
    return (
        <React.Fragment>
            <nav className="nav">
                {
                    enlaces.map(function (unE, i) {
                        if (i === 0) {
                            return  <NavbarItem key={i} url={unE.url} text={unE.text} active={true} />
                        }
                        return <NavbarItem key={i} url={unE.url} text={unE.text} />
                    })
                }
            </nav>
            { props.children }
        </React.Fragment>
    )
}

export default Navbar;
