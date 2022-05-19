import React from "react";

//Functional component
const SerieFibonacci = () =>{
    const titulo = 'Serie Fibonacci';

    let date;
    let hours;
    let minutes;
    let seconds;
    let firstNumM = 0;
    let secondNumM = 0;

    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    if (minutes < 10){
        firstNumM = 0;
        secondNumM = minutes.toString().slice(0);
    }else {
        firstNumM = minutes.toString().slice(0,1);
        secondNumM = minutes.toString().slice(1);
    }
    
    const generateSerie = () =>{
        let fibonacci = firstNumM + ',' + secondNumM;
        let num = 0;
        for (let i=0; i<seconds; i++) {
            let dataFibo = fibonacci.split(',');
            num = parseInt(dataFibo[dataFibo.length - 1]) + parseInt(dataFibo[dataFibo.length - 2]);
            fibonacci += ',' + num.toString();
        }
        document.getElementById('sfibo').innerHTML = fibonacci;
    };
    const clearSerie = () =>{
        document.getElementById('sfibo').innerHTML = '';
    };

    return (
        <>
            <h1>{titulo}</h1>
            <h2>{hours + ':' + minutes + ':' + seconds}</h2>
            <h3 id="sfibo"> </h3>
            <button className="FirstButton" onClick={generateSerie}>Serie Fibonacci</button>
            <button className="ClearButton" onClick={clearSerie}>Limpiar</button>
        </>
    );
};

export default SerieFibonacci;