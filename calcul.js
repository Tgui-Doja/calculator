import React, { useState } from 'react';

function Calcul() {
    const [display, setDisplay] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                // Évaluer l'expression et mettre à jour l'affichage
                setDisplay(eval(display));
            } catch (error) {
                // En cas d'erreur, afficher "Error"
                setDisplay('Error');
            }
        } else if (value === 'AC') {
            // Effacer l'affichage
            setDisplay('');
        } else if (value === 'DEL') {
            // Supprimer le dernier caractère de l'affichage
            setDisplay(display.slice(0, -1));
        } else {
            // Ajouter le caractère au contenu existant de l'affichage
            setDisplay(display + value);
        }
    };
  
    return (
        <div className="calculator">
            <h6 className="owner">Made by khadija tagui</h6>
            <input type="text" value={display} readOnly />
            <div> 
                <button onClick={() => handleButtonClick('AC')}>AC</button>
                <button onClick={() => handleButtonClick('DEL')}>DEL</button>
                <button onClick={() => handleButtonClick('%')}>%</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('00')}>00</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button className="equalBtn" onClick={() => handleButtonClick('=')}>=</button>
            </div>
        </div>
    );
}

export default Calcul;
