import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header: FC = () => {
    const [expanded, toggle] = useState(false);
    return (
        <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <NavLink className="navbar-item" to="/">
                    FuelTracker
                </NavLink>

                <a
                    role="button"
                    className={`navbar-burger burger ${expanded && `is-active`}`}
                    aria-label="menu"
                    aria-expanded={expanded}
                    data-target="navbar"
                    onClick={() => toggle(!expanded)}
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <div id="navbar" className={`navbar-menu ${expanded && `is-active`}`}>
                <div className="navbar-start">
                    <Link to="/" className="navbar-item" onClick={() => toggle(expanded && !toggle)}>Dashboard</Link>
                    <Link to="/users" className="navbar-item" onClick={() => toggle(expanded && !toggle)}>Users</Link>
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
