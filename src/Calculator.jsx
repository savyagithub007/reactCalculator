import React, { useState, useEffect } from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => 
    { calculateResult();},
    [num1, num2, operation]);

    const calculateResult = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult('Please enter valid numbers');
            return;
        }

        let res;
        switch (operation) {
            case '+':
                res = number1 + number2;
                break;
            case '-':
                res = number1 - number2;
                break;
            case '/':
                res = number1 / number2;
                break;
            case '*':
                res = number1 * number2;
                break;
            case '%':
                res = number1 % number2;
                break;
            default:
                res = 'Please select an operation';
        }
        setResult(res);
    };

    return (
        <div className='outer-wrapper'>

            <div className="inner-wrapper">
             <input type="text" id='number1' value={num1} onChange={(e) =>
                setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input type="text" id='number2' value={num2} onChange={(e) =>
                setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="">Operation</option>
                <option value="+">Addition</option>
                <option value="-">Subtract</option>
                <option value="/">Divide</option>
                <option value="*">Multiply</option>
                <option value="%">Module</option>
            </select>
            
            <p>{result !== null ? result : ""}</p>
            </div>

        </div>
    );
}

export default Calculator;
