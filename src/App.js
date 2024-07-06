import './App.css';
import { useState, useEffect } from 'react';

function App() {

    const [advice, setAdvice] = useState('Never give up on your dreams!');//uses the useState hook to set the initial value of advice
    const [id, setId] = useState('001');// uses the useState hook to set initial id value
    const ADVICE_URL = 'https://api.adviceslip.com/advice';//a variable that holds the api url
    const fetchAdvice = () => { //a function that handles fetching the data
        fetch(ADVICE_URL) //launches the fetch request to the api
            .then((res) => { //gets api the request response
            return res.json() //gets the response in JSON format and converts it to JavaScript objects that can be destructured.
            })
            .then((data) => { //result of the converted response
            // console.log(data); //logs the data gotten to the console
            setAdvice(data.slip.advice) //destructures the object and changes the value of advice to the current one
            setId(data.slip.id) //does the same thing
        })
    }

    useEffect(() => {
        fetchAdvice() //uses the useEffect hook to handle all the fetch requests
    }, [])
    
    return (
        <div className="App flex">
            <h1 className="h1">ADVICE GENERATOR</h1>
            <div className="container flex">
                <span className="advice-num">Advice {`#${id}`}</span>
                <p className="advice">{advice}</p>
                <img src="./images/pattern-divider-desktop.svg" alt="" className="divider" />
                <div className="dice">
                    <img src="./images/icon-dice.svg" alt="dice" className="dice-img" onClick={fetchAdvice}/>
                </div>
            </div>
        </div>
    )
  
};

export default App;