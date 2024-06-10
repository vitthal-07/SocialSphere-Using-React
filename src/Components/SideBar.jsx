import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <>
            <div
                className='d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideBar'
                style={{ width: "200px" }}
            >
                <a className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
                    <svg className='bi pe-none me-2' width='40' height='32'>
                        <use xlinkHref='#bootstrap'></use>
                    </svg>
                    <span className='fs-4'>Posts</span>
                </a>
                <hr />
                <ul className='nav nav-pills flex-column mb-auto'>
                    <li className='nav-item'>
                        <Link
                            to='/'
                            className='nav-link text-white'
                            aria-current='page'
                        >
                            <svg
                                className='bi pe-none me-2'
                                width='16'
                                height='16'
                            >
                                <use xlinkHref='#home'></use>
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/create-post'
                            className='nav-link text-white '
                        >
                            <svg
                                className='bi pe-none me-2'
                                width='16'
                                height='16'
                            >
                                <use xlinkHref='#speedometer2'></use>
                            </svg>
                            Create Post
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
