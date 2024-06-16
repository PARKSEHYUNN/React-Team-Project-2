import React from 'react';

function A10_question(props) {
    return(
        <>
            <div>
                <div>
                    {props.question} <br/> {props.question2} <br/><br/> <img src={props.img1} width = "90%" alt="" />
                </div>
            </div>        
        </>
    );
}

export default A10_question;