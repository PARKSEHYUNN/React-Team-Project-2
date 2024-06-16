import React, { useState, useEffect } from "react";
import "./CoinApp.css";

const CoinApp = () => {
  const [value, setValue] = useState(0);
  const [userInput, setUserInput] = useState({ 10: 0, 50: 0, 100: 0 });
  const [feedback, setFeedback] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [answer, setAnswer] = useState(0);

  useEffect(() => {
    generateRandomValue();
  }, []);

  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 100 + 1) * 10;
    setValue(randomValue);
    setUserInput({ 10: 0, 50: 0, 100: 0 });
    setFeedback("");
  };

  const handleInputChange = (coin, value) => {
    setUserInput((prevInputs) => ({
      ...prevInputs,
      [coin]: value === "" ? 0 : Number(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalValue = calculateTotalValue();
    if (totalValue === value) {
      setFeedback("정답입니다!");
      setAnswer((prevAnswer) => {
        const newAnswer = prevAnswer + 1;
        console.log("정답 횟수 : ", newAnswer);
        return newAnswer;
      });
    } else {
      setFeedback("다시 시도해보세요");
    }
    setModalOpen(true);
  };

  const calculateTotalValue = () => {
    const coinValues = { 10: 10, 50: 50, 100: 100 };
    let total = 0;

    for (const [coin, count] of Object.entries(userInput)) {
      total += count * coinValues[coin];
    }
    return total;
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const coinImages = {
    10: "./Ten.jpg",
    50: "/Fifty.jpg",
    100: "/Hundred.jpg",
  };

  return (
    <div className="app">
      <div className="title num1">
        <h4>주어진 동전으로 금액 만들기</h4>
      </div>
      <div className="title num2">
        <h1>
          '10원, 50원, 100원' 동전을 이용하여 제시된 금액이 되려면 각각 몇 개씩
          필요한지 적어보세요.
        </h1>
        <h1 className="direction">{value}원이 필요합니다.</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="problemContainer">
          {Object.keys(userInput).map((coin) => (
            <div className="problemBlock" key={coin}>
              <img
                className="pic"
                src={coinImages[coin]}
                alt={`${coin}원 동전`}
                onError={(e) => console.log(e)}
              />
              {coin}원 동전 갯수 :
              <input
                className="user"
                type="text"
                name={coin}
                value={userInput[coin]}
                onChange={(e) => handleInputChange(coin, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button className="pushbtn" type="submit">
          제출
        </button>
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p
                className={`feedback ${
                  feedback === "정답입니다!" ? "correct" : "incorrect"
                }`}
              >
                {feedback}
              </p>
              <button
                onClick={() => {
                  if (feedback === "정답입니다!") {
                    generateRandomValue();
                  }
                  closeModal();
                }}
                className="rebtn"
              >
                {feedback === "정답입니다!" ? "새로운 문제" : "다시 시도"}
              </button>
              {feedback === "정답입니다!" && (
                <button className="endbtn" onClick={closeModal}>
                  이전으로
                </button>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CoinApp;
