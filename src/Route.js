import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App"

import Home from "./Home"
import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Routes>
                            <Route path='/' exact element={<App/>} />
                            <Route path='/project-list' exact element={<Home/>} />
                            <Route path='/project-1' exact element={<Project1/>} />
                            <Route path='/project-2' exact element={<Project2/>} />
                            <Route path='/project-3' exact element={<Project3/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;