import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
    const [expanded, toggle] = useState(false);
    return (
        <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                        height="28"
                    />
                </a>

                <a
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded={expanded}
                    data-target="navbarBasicExample"
                    onClick={() => toggle(!expanded)}
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${expanded && `is-active`}`}>
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Dashboard</Link>

                    <Link to="/users" className="navbar-item">Users</Link>

                    {/* <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">More</a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">About</a>
                            <a className="navbar-item">Jobs</a>
                            <a className="navbar-item">Contact</a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">Report an issue</a>
                        </div>
                    </div> */}
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <Link to="login" className="button is-light">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
