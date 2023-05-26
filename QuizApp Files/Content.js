import { useState, useEffect } from "react";

const Content = ({ questions }) => {

    const [points, setPoints] = useState(0);
    const [isTried, setIsTried] = useState(false);
    const [color, setColor] = useState('#001242');
    const [question, setQuestion] = useState(questions[0]);
    const [message, setMessage] = useState('');
    const handleNext = () => {
        question.id < questions.length ? setQuestion(questions[question.id]) : setQuestion(questions[question.id - 1]);

    }

    const handlePrev = () => {
        question.id > 1 ? setQuestion(questions[question.id - 2]) : setQuestion(questions[0])
        setQuestion({ ...question, tried: true });

    }

    const handleAnswer = (option) => {
        if (!question.tried) {
            option === question.answer ? setPoints(points + 1) :
                points > 0 ? setPoints(points) : setPoints(0);
            setIsTried(true);
            setQuestion({ ...question, tried: true });
            option === question.answer ? setMessage('Your answer is correct!') : setMessage('Your Answer is incorrect');

            setTimeout(() => {

                if (question.id !== questions.length) {
                    handleNext();
                    setMessage('');
                }
                else {
                    setMessage('Game Over.');
                }

            }, 750)

        }


    }

    return (
        <main>
            <label>{question.q}</label> <br />
            {question.options.map((option) => (
                <button key={question.options.indexOf(option)}
                    style={question.tried === false ? { color: 'aliceblue' } : option === question.answer ? { backgroundColor: 'green' } : null}
                    onClick={() => handleAnswer(option)}>
                    {option} </button>
            ))}
            <label> {message} <br /> Points: {points} </label>
            <br />
            <br />
            <label>{question.id}/{questions.length}</label>

        </main>
    )
}

export default Content
