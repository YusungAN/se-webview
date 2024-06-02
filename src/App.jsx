import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register, Main, Find, Found, MyPage, MyLost, SearchList, MyFound, ChatList, Chat } from './pages';

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
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mylost" element={<MyLost />} />
                    <Route path="/mylost/:findid" element={<SearchList />} />
                    <Route path="/myfound" element={<MyFound />} />
                    <Route path="/chat" element={<ChatList />} />
                    <Route path="/chat/:roomid" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;