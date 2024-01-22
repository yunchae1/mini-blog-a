import axios from "axios";
import React, { useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route
    
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from "./component/page/PostWhitePage";
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
`;

function App(props) {
        

  return (
    <>
    <BrowserRouter>
            <MainTitleText>
                <p>** 블로그</p>                
            </MainTitleText>
           <hr />            
  
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" Component={PostWritePage} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
      
        
   
    </>
  );
        
}

export default App;