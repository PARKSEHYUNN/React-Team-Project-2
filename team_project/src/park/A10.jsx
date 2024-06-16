import React from "react";
import { Link } from "react-router-dom";
import A10_question from "./A10_question.jsx";
import A10_test from "./A10_test.jsx";
import "./A10.css";


const questions = [
    {
        question: "1. 다음은 대한민국의 국기인 태극기입니다.",
        img1: require("./images/image1.jpg")
    },
    {
        question: "2. 태극기의 4괘에 해당하는 건곤감리 입니다. ",
        question2: "각 괘의 이름, 획수, 방향을 확인해보세요.",      
        img1: require("./images/image4.jpg")
    }
]

const styles = {
    button: {
        padding: "10px 20px",
        fontSize: "30px",
        padding: '10px',
        margin: '5px',
        marginTop: '10px',
        border: 'none',
        borderRadius: '50px',
        backgroundColor: '#e3f2fd',
        color: '#1e88e5',
        cursor: 'pointer',
    }
}

function A10(props){
    return(
        <>
        <div className="backcolor">
            <div className="explainbox">
                <div className="header">
                    {questions.map((item) => {
                        return(
                            <A10_question question={item.question} question2={item.question2} img1={item.img1}/>
                        );
                    })}
                </div>
            </div>
            <Link to="/">
                <button className="button_next">뒤로</button>
            </Link>
            <Link to="/test">
                <button className="button_next">문제풀러 가기</button>
            </Link>
        </div>
        
        </>
    )
}

export default A10;
