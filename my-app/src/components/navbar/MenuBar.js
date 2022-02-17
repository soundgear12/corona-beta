import React from "react";
import { Link } from "react-router-dom";
import { faHome, faUsers, faFlagUsa, faSyringe, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <ul className="menu-bar-items">
                <li style={{ float: "left" }}>
                <Link to="/home">
                        Covid App
                    </Link>
                </li>

                <li>
                    <Link to="/world">
                        <FontAwesomeIcon icon={faFlagUsa} />
                    </Link>
                </li>

                <li>
                    <Link to="/query">
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                    </Link>
                </li>

                { <li>
                    <Link to="/layout">
                        <FontAwesomeIcon icon={faUsers} />
                    </Link>
                </li> }

                <li>
                    <Link to="/vaxxed">
                        <FontAwesomeIcon icon={faSyringe} />
                    </Link>
                </li>

                <li>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuBar