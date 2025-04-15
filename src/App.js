// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

function App() {
  return (
    <Router>
      <div style={containerStyle}>
        <nav style={navStyle}>
          <Link to="/page1">
            <button style={buttonStyle}>1</button>
          </Link>
          <Link to="/page2">
            <button style={buttonStyle}>2</button>
          </Link>
          <Link to="/page3">
            <button style={buttonStyle}>3</button>
          </Link>
          <Link to="/page4">
            <button style={buttonStyle}>4</button>
          </Link>
          <Link to="/page5">
            <button style={buttonStyle}>5</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </div>
    </Router>
  );
}

// Container 스타일 (가운데 정렬)
const containerStyle = {
  display: 'flex',
  justifyContent: 'center', // 가로로 중앙 정렬
  alignItems: 'center', // 세로로 중앙 정렬
  height: '100vh', // 화면 전체 높이
  textAlign: 'center', // 텍스트 중앙 정렬
  flexDirection: 'column', // 세로로 배치
};

// Navigation 스타일 (버튼 가로 정렬)
const navStyle = {
  display: 'flex',
  justifyContent: 'center', // 버튼들 가운데 정렬
  gap: '10px', // 버튼 간격
  marginBottom: '20px', // 하단 여백
};

// 버튼 스타일
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default App;
