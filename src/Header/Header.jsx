import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header id="top">
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            aria-hidden="true"
                            className="mr-2"
                            viewBox="0 0 24 24"
                            focusable="false"
                        >
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                        <strong>Album</strong>
                    </a>
                    <DropdownButton id="language-picker" title="EN" variant="success">
                        <Dropdown.Item eventKey="EN" active>EN</Dropdown.Item>
                        <Dropdown.Item eventKey="UA">UA</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </header>
    );
};

export default Header;
