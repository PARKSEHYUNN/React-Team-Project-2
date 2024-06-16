import React, {useState, useEffect} from "react";

const A145_Question = (props) => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [answer, setAnswer] = useState(0);

    const [result1, setResult1] = useState(null);
    const [result2, setResult2] = useState(null);
    const [input1Color, setInput1Color] = useState("black");
    const [input2Color, setInput2Color] = useState("black");

    useEffect(() => {
        setNum1(randNum(30, 80));
        setNum2(randNum(1, 30));
        setNum3(randNum(1, 30));
        setInput1(randTF() ? "+" : "-");
        setInput2(randTF() ? "+" : "-");
    }, []);

    useEffect(() => {
        setAnswer(Function(`return ${num1}${input1}${num2}${input2}${num3}`)());
    }, [num1, num2, num3, input1, input2]);

    const handlerInputChange = (event) => {
        if(event.target.value === "+" || event.target.value === "-"){
            if(event.target.id === "input_1") event.target.value === input1 ? setResult1(true) : setResult1(false);
            else if(event.target.id === "input_2") event.target.value === input2 ? setResult2(true) : setResult2(false);
        }
        else event.target.value = "";
    }

    useEffect(() => {
        result1 ? setInput1Color("green") : result1 === null ? setInput1Color("black") : setInput1Color("red");
    }, [result1]);

    useEffect(() => {
        result2 ? setInput2Color("green") : result2 === null ? setInput2Color("black") : setInput2Color("red");
    }, [result2]);

    return (
        <div className="Question">
            <h1 className="num">{num1}</h1>
            <input type="text" className="input" id="input_1" maxLength={1} onChange={handlerInputChange} style={{border: `2px solid ${input1Color}`}}></input>
            <h1 className="num">{num2}</h1>
            <input type="text" className="input" id="input_2" maxLength={1} onChange={handlerInputChange} style={{border: `2px solid ${input2Color}`}}></input>
            <h1 className="num">{num3}</h1>
            <h1 className="num">=</h1>
            <h1 className="num">{answer}</h1>
        </div>
    );
};

const randNum = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
const randTF = () => randNum(0, 1) === 0 ? true : false;

export default A145_Question;