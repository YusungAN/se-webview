import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register, Main, Find, Found } from './pages';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/find" element={<Find />} />
                    <Route path="/found" element={<Found />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;