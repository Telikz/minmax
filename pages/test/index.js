import { useState } from 'react';
import axios from 'axios';
import Quiz from '/components/Quiz';
import Layout, { siteTitle } from '/components/layout';

export default function QuizPage() {
    const [quizData, setQuizData] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(null);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    
    const fetchQuestionAndOptions = async () => {
    
        const { data } = await axios.post('/api/gptQuiz', { prompt });
        console.log("GPT-4 response data:", data);
    
        if (!data.result || data.result.length < 2) {
            console.error('Invalid GPT-4 response data.');
            return;
        }
    
        const cleanedData = data.result.filter((item) => item.trim() !== '');
        const question = cleanedData[0];
        let allOptions = [];
        let optionsText;
    
        if (cleanedData.length === 2) {
            optionsText = cleanedData[1];
            const optionsRegex = /([A-Da-d][\.\:\)])\s\*?[^\s]+\s[^A-Da-d]+/g;
            allOptions = Array.from(optionsText.matchAll(optionsRegex), m => m[0]);
        } else {
            allOptions = cleanedData.slice(1);
        }
    
        allOptions = allOptions.flatMap((option) => option.split(/(?=[A-Da-d][\.\:\)])/));
        allOptions = allOptions.filter((option) => option.trim() !== '');
    
        const correctAnswer = allOptions.find((option) => option.includes('*'));
        const sanitizedCorrectAnswer = correctAnswer.replace(/^\*/, '').replace(/^[A-Da-d][\.\:\)]\s*/, '').trim();
    
        const sanitizedOptions = allOptions.map((option) => {
            const optionWithoutAsterisk = option.replace(/^\*/, '').trim();
            const optionWithoutPrefix = optionWithoutAsterisk.replace(/^[A-Da-d][\.\:\)]\s*/, '').trim();
            return optionWithoutPrefix;
        });
    
        // Shuffle the options
        shuffleArray(sanitizedOptions);
    
        // Update the correct answer's index
        const correctAnswerIndex = sanitizedOptions.findIndex((option) => option === sanitizedCorrectAnswer);
    
        setQuizData({
            question: question,
            options: sanitizedOptions,
            correctAnswer: sanitizedCorrectAnswer,
            correctAnswerIndex: correctAnswerIndex,
        });
    };
    

    const handleAnswer = (selectedOption) => {
        setAnswer(selectedOption);
        const isCorrect = selectedOption === quizData.correctAnswer;

        // Update the state to store the result
        setResult(isCorrect ? 'Correct!' : 'Incorrect!');
    };

    return (
        <Layout>
            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-8">AI-Generated Quiz</h1>
                <button
                    className="btn bg-primary hover:bg-primary-focus text-primary-content px-4 py-2 rounded mb-8"
                    onClick={fetchQuestionAndOptions}
                >
                    Fetch Question
                </button>
                {quizData && (
                    <Quiz
                        question={quizData.question}
                        options={quizData.options}
                        handleAnswer={handleAnswer}
                    />
                )}
                {answer && (
                    <p className="text-xl mt-4">
                        You selected: {answer}
                        <br />
                        {result}
                    </p>
                )}
            </div>
        </Layout>
    );
}
