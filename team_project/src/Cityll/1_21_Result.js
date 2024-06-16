import React from 'react';
import './1_21_Result.css';

function ResultPage({ result }) {
  if (!result) {
    return <div className="resultContainer">결과가 없습니다.</div>;
  }

  const { answers, result: resultData, selectedAnswer, correctAnswer } = result;

  return (
    <div className="resultContainer">
      <div className="resultContent">
        <h1>결과 페이지</h1>
        <div className="resultSection">
          <h2>문제 1: 단어 개수 세기</h2>
          <p className={resultData.childrenCountCorrect ? 'correct' : 'incorrect'}>
            아이들 개수: {resultData.childrenCountCorrect ? '정답입니다!' : '틀렸습니다.'}
          </p>
          <p className={resultData.uncleCountCorrect ? 'correct' : 'incorrect'}>
            아저씨 개수: {resultData.uncleCountCorrect ? '정답입니다!' : '틀렸습니다.'}
          </p>
          <p>답변받은 아이들 개수: {answers.childrenCount}</p>
          <p>답변받은 아저씨 개수: {answers.uncleCount}</p>
          <p>정답: 아이들 = 8, 아저씨 = 4</p>
        </div>
        <div className="resultSection">
          <h2>문제 2: 연상 단어 선택</h2>
          <p className={resultData.secondQuestionCorrect ? 'correct' : 'incorrect'}>
            세 번째 어른에 대한 연상 단어: {resultData.secondQuestionCorrect ? '정답입니다!' : '틀렸습니다.'}
          </p>
          <p>답변받은 단어: {selectedAnswer}</p>
          <p>정답: {correctAnswer}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;