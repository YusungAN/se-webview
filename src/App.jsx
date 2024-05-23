import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register } from './pages';

function App() {



    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;