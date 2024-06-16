import './App.css';

import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import MainPage from './MainPage';
import A145 from './parksehyun/A145';
import QuestionPage from './Cityll/1_21_Question';
import CoinApp from './CoinApp/CoinApp';
import ResultPage from './Cityll/1_21_Result';
import A10 from './park/A10';
import A10_test from './park/A10_test';


function App() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = (data) => {
    setResult(data);
    navigate('/result');
  };

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/sign-game' element={<A145 />} />
      <Route path='/letter-game' element={<QuestionPage onSubmit={handleOnSubmit} />} />
      <Route path='/result' element={<ResultPage result={result} />} />
      <Route path='/another-game' element={<A10 />} />
      <Route path='/coin-game' element={<CoinApp />} />
      <Route path="/A10" element={<A10 />} />
      <Route path="/test" element={<A10_test />} />
    </Routes>
  );
}
export default App;
