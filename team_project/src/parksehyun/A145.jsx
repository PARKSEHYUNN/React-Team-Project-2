import React from "react";
import "./A145.css";
import A145_Question from "./A145_Question";

const A145 = (props) => {
    return (
        <div className="main">
            <div className="questionTitle">
                <a>다음 {"<"}보기{">"}를 보고,<br></br> 빈칸에 알맞은 부호를 넣어보세요.</a>
            </div>
            <div className="questionContent">
                <a>{"<"}보기{">"}</a>
                <br></br>
                +, -
            </div>
            <div className="questionBox">
                <A145_Question></A145_Question>
                <A145_Question></A145_Question>
                <A145_Question></A145_Question>
                <A145_Question></A145_Question>
                <A145_Question></A145_Question>
            </div>
            
        </div>
    );
};

export default A145;