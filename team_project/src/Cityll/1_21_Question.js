import React, { useState, useEffect } from 'react';
import './1_21_Question.css';

function QuestionPage({ onSubmit }) {
  const [timer, setTimer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({
    childrenCount: '',
    uncleCount: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    const correctAnswer = '친절함';
    const result = {
      childrenCountCorrect: answers.childrenCount === '3',
      uncleCountCorrect: answers.uncleCount === '2',
      secondQuestionCorrect: selectedAnswer === correctAnswer,
    };
    onSubmit({ result, answers, selectedAnswer, correctAnswer });
  };

  return (
    <div className="questionContainer">
      <div className="timer">Timer: {timer}s</div>
      <div className="questionTitle">
        다음 이야기를 읽고 [아이들]의 개수와, 
        <br />
        [아저씨]의 개수를 세어보세요.
      </div>
      <div className="questionContent"> 
        <p>
          아이들은 공원 한쪽 벽면에 페인트 작업을 하는 세 명의 어른들을 보았습니다. 
          <br /> 
          <br /> 아이들이 다가가 물었습니다. “아저씨, 지금 뭐하고 계세요?”
          <br /> 첫 번째 어른은 아이들에게 퉁명스럽게 대답했습니다. 
          <br /> “페인트칠하고 있는데 너희들 때문에 힘드니까 조용히 해줄래?”
          <br /> 
          <br /> 아이들은 두 번째 어른에게 같은 질문을 하자 그는 피곤한 목소리로  아이들에게 대답했습니다. 
          <br /> “뭐하긴? 돈을 벌기 위해서 열심히 일하고 있지. 
          <br /> 옷에 페인트 묻으니, 저리 가서 노는 게 좋겠구나.”
          <br />
          <br /> 아이들이 마지막으로 세 번째 어른에게 질문하자 그는 즐거운 표정으로 아이들에게 대답했습니다. 
          <br /> “아저씨는 지금, 이 세상에서 제일 멋진 그림을 이 벽에 그리고 있지.”
          <br />
          <br /> 아이들은 의아해하며 다시 물었습니다. 
          <br /> “벽에 그냥 하얀색만 칠하고 있는데, 어디에 그림이 있어요?”
          <br /> 
          <br /> 아저씨는 여기저기 페인트가 묻은 얼굴로 웃으며 말했습니다. 
          <br /> “여기 하얀 벽이 아저씨가 그리는 그림이고 작품이야. 
          <br /> 아저씨는 항상 깨끗한 벽을 만들어 낸단다.”  
        </p>
      </div>
      <div className="questionBox">
        1. 다음 단어의 개수를 적어보세요.
        <div className="answerContainer">
          <input
            type="text"
            name="childrenCount"
            className="answerInput"
            placeholder="아이들 개수"
            value={answers.childrenCount}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="uncleCount"
            className="answerInput"
            placeholder="아저씨 개수"
            value={answers.uncleCount}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="questionBox">
        2. 다음 글을 읽고 세 번째 어른에게 연상되는 단어는 무엇일까요?<br />
        <div className="buttonContainer">
          {['서운함', '화남', '친절함', '아쉬움', '무기력함'].map((answer, index) => (
            <button
              key={index}
              className={`answerButton ${selectedAnswer === answer ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(answer)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <button className="submitButton" onClick={handleSubmit}>제출하기</button>
    </div>
  );
}

export default QuestionPage;