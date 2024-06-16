import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import test_num1 from './images/geon.jpg';
import test_num2 from './images/gon.jpg';
import test_num3 from './images/gam.jpg';
import test_num4 from './images/ri.jpg';
import test_num5 from './images/image2.jpg';
import test_num6 from './images/image3.jpg';

const styles = {
    button: {
        position: "absolute",
        height: 150,
        width: 150,
        fontSize: "20px",
        margin: "5px",
        border: 'none',
        borderRadius: "5px",
        cursor: 'pointer'
    },
    button1: {
        top: "4%",
        left: "4%"
    },
    button2: {
        top: "4%",
        right: "4%"
    },
    button3: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    button4: {
        bottom: "4%",
        left: "4%"
    },
    button5: {
        bottom: "4%",
        right: "4%"
    }
}

const initialImageList = [
    test_num1,
    test_num2,
    test_num3,
    test_num4,
    test_num5,
    test_num6
]

const correctAnswers = [test_num1, test_num3, test_num5, test_num4, test_num2];

function A10_test() {
    const [images, setImages] = useState([null, null, null, null, null]);
    const [selectedButton, setSelectedButton] = useState(null);
    const [shuffledImageList, setShuffledImageList] = useState([]); 
    const [correctCount, setCorrectCount] = useState(0);

    useEffect(() => {
        const shuffledImages = [...initialImageList];
        for (let i = shuffledImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
        }
        setShuffledImageList(shuffledImages);
    }, []);

    const handleClick = (btn_num) => {
        setSelectedButton(btn_num);
    };

    const handleImageClick = (img_src) => {
        if (selectedButton !== null) {
            const newImages = images.map((img, i) => {
                return i === selectedButton ? img_src : img;
            });
            setImages(newImages);
        }
    };

    const buttonStyle = (img_src, isSelected) => ({
        ...styles.button,
        backgroundImage: img_src ? `url(${img_src})` : 'none',
        backgroundColor: isSelected ? '#edf7ac' : '#a6a6a6',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    });

    const handleSubmit = () => {
        const confirmSubmit = window.confirm("정말 제출하시겠습니까?");
        if (confirmSubmit) {
            let count = 0;
            for (let i = 0; i < correctAnswers.length; i++) {
                if (images[i] === correctAnswers[i]) {
                    count++;
                }
            }
            setCorrectCount(count);
        }
    };

    return (
        <div className="backcolor">
            <div className="test_box">
                <h1>Q. 빈칸에 올바른 그림을 골라 태극기를 완성하시오.</h1>
                    <div className="select_box">
                    {images.map((img_src, btn_num) => (
                        <button 
                            key={btn_num} 
                            onClick={() => handleClick(btn_num)} 
                            style={{
                                ...buttonStyle(img_src, selectedButton === btn_num), 
                                ...styles[`button${btn_num + 1}`]
                            }}
                        >
                            {img_src ? '' : `${btn_num + 1}`}
                        </button>
                    ))}
                </div>
                <div className="imageContainer">
                    {shuffledImageList.map((img_src, idx) => (
                        <div key={idx} className="imageWrapper">
                            <span className="number">{idx + 1}</span>
                            <img
                                src={img_src}
                                onClick={() => handleImageClick(img_src)}
                                className="image"
                            />
                        </div>
                    ))}
                </div>
                {correctCount > 0 && (
                    <div className="accuracyText">
                        정답률: {((correctCount / correctAnswers.length) * 100).toFixed(2)}%
                    </div>
                )}
            </div>
            <Link to="/A10">
                    <button className="button_back">뒤로</button>
            </Link>
            <button className="button_result" onClick={handleSubmit}>제출하기</button>
        </div>
    );
}

export default A10_test;