import React, { FC, useState } from 'react';

interface Props {
    toggleForm(): void;
}

export const UserDropdown: FC<Props> = ({ toggleForm }) => {
    const [active, setActive] = useState(false);

    return (
        <div className={`dropdown is-right ${active && 'is-active'}`}>
            <div className="dropdown-trigger">
                <a
                    onClick={() => setActive(!active)}
                    className="card-header-icon"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                >
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </a>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <a onClick={() => (setActive(!active), toggleForm())} className="dropdown-item">
                        Add A Vehicle
                    </a>
                </div>
            </div>
        </div>
    );
};
