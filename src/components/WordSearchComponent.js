import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

function WordSearchComponent(props){

    let finalArr = [];

    const [answears, setAnswears] = useState(finalArr);
    const [done, setDone] = useState(false);

    const fillTheField = () => {
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];
        let field = document.getElementsByClassName('word-letters');
        for (let i = 0; i < 10; i++){
            let myInsideStart = `<div class='words-row col'>`;
            for(let j = 0; j < 10; j++){
                myInsideStart += `<div class='letter'>${letters[Math.floor(Math.random()*letters.length)]}</div>`;
            }
            let myInside = myInsideStart + `</div>`;
            field[0].innerHTML += myInside;
        }
    };

    const fillWords = () => {
        let myH = document.getElementsByClassName('letter');
        for(let k = 0; k < props.words.letters.length; k++){
            let index = props.words.positions[k];
            let value = props.words.letters[k];
            myH[index].innerHTML = value;
        }
    };

/*     function clickHandler(e){
        e.target.classList.toggle('letter-pushed');
        if (e.target.classList.contains('letter-pushed')){
            finalArr.push(e.target.innerHTML);
        } else {
            finalArr.pop(e.target.innerHTML);
        }
        document.getElementById('1').innerHTML = finalArr;
    } */

    const clickHandler = (e) => {
        e.target.classList.toggle('letter-pushed');
        if (e.target.classList.contains('letter-pushed')){
            finalArr.push(e.target.innerHTML);
        } else {
            finalArr.pop(e.target.innerHTML);
        }
        document.getElementById('1').innerHTML = finalArr;
    };

    const chooseElems = () => {
        let myLetters = document.getElementsByClassName('letter');
        console.log(done);
        if(!done){
            for (let i = 0; i < myLetters.length; i++){
                myLetters[i].addEventListener('click', clickHandler);
            }
        } 
        else if(done) {
            for (let i = 0; i < myLetters.length; i++){
                myLetters[i].removeEventListener('click', clickHandler); 
            }
        }
    };

    useEffect(() => {
        fillTheField();
    },[]);

    useEffect(() => {
        fillWords();
    },[]);

    useEffect(() => {
        chooseElems();
    }, [answears]);

    return(
        <div>
            <h1 className="content">Hello Words Searcher</h1>
            <Row xs='12' className='justify-content-center text-center words-field'>
                    <Col md='2' xs='1'></Col>
                    <Col md='8' xs='10' className='align-items-center word-letters'>
                    </Col>
                    <Col md='2' xs='1'></Col>
            </Row>
            <h3 id='1'></h3>
            <h3>{answears}</h3>
            <button className='stop' onClick={()=>setDone(!done)}>CHECK</button>
        </div>
    );
}

export default WordSearchComponent;