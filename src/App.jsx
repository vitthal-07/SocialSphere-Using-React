import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import "./App.css";
import PostContextProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <PostContextProvider>
            <div className='app-container'>
                <SideBar />
                <div className='content'>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </PostContextProvider>
    );
}
