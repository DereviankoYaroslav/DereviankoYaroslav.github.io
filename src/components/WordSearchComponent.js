import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

function WordSearchComponent(props){

    document.body.style.backgroundImage = 'none';

    let finalArr = [];

    const [answears, setAnswears] = useState(finalArr);
    const [done, setDone] = useState(false);
    const [numbers, setNumbers] = useState([]);

    const fillTheField = () => {
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let field = document.getElementsByClassName('word-letters');
        for (let i = 0; i < props.words.sizeY; i++){
            let myInsideStart = `<div class='words-row col'>`;
            for(let j = 0; j < props.words.sizeX; j++){
                myInsideStart += `<div class='letter'>${letters[Math.floor(Math.random()*letters.length)]}</div>`;
            }
            let myInside = myInsideStart + `</div>`;
            field[0].innerHTML += myInside;
        }
    };

    const fillWords = () => {
        //let wordsToFind = props.words.wordsToFind.toString().split(',').join('').toUpperCase();
        let wordsToFind = props.words.wordsToFind;
        let wordsLetters = Array.from(wordsToFind);
        console.log(wordsLetters);
        let myH = document.getElementsByClassName('letter');
        let numArr = [];
        let innerNumb = [];
        wordsLetters.forEach((element) => {
            let firstIndex = Math.floor(Math.random()*(props.words.sizeX*props.words.sizeY));
            if(firstIndex<((props.words.sizeX*props.words.sizeY)-element.length*props.words.sizeX)){
                myH[firstIndex].innerHTML = element[0].toUpperCase();
                innerNumb[0] = firstIndex;
                console.log(firstIndex)
                for(let k = 1; k < element.length; k++){
                    firstIndex+=props.words.sizeX;
                    innerNumb[k] = firstIndex;
                    myH[firstIndex].innerHTML = element[k].toUpperCase();
                }
            }
            else {
                myH[firstIndex].innerHTML = element[0].toUpperCase();
                innerNumb[0] = firstIndex;
                console.log(firstIndex)
                for(let k = 1; k < element.length; k++){
                    firstIndex+=1;
                    innerNumb[k] = firstIndex;
                    myH[firstIndex].innerHTML = element[k].toUpperCase();
                }
            }
            numArr+=innerNumb;
            numArr+=',';
        });
        numArr = numArr.slice(0,-1);
        console.log(numArr);
        setNumbers(numArr);
        /* for(let k = 0; k < props.words.letters.length; k++){
            let index = props.words.positions[k];
            let value = props.words.letters[k];
            myH[index].innerHTML = value;
        } */
    };

    const chooseElems = () => {
        let myLetters = document.getElementsByClassName('letter');
        console.log(done);
        if(!done){
            for (let i = 0; i < myLetters.length; i++){
                myLetters[i].addEventListener('click', () => {
                    myLetters[i].classList.toggle('letter-pushed');
                    if (myLetters[i].classList.contains('letter-pushed')){
                        finalArr.push(i);
                    } else {
                        finalArr.pop(i);
                    }
                });
            }
        } 
    };

    const checker = () => {
        setDone(!done);
        let meAr = Array.from(answears);
        let ansAr = Array.from(new Set(numbers.toString().split(','),Number));
        console.log(meAr);
        console.log(ansAr);
        if(ansAr.sort().toString() === meAr.sort().toString()){
            document.getElementsByClassName('choosen-words')[0].innerHTML = 'Correct';
            console.log('good!');
        } 
        else {
            document.getElementsByClassName('choosen-words')[0].innerHTML = `You didn't select all the letters or select the wrong ones`;
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
        <div className='words-search'>
            <h1 className="content">Hello Words Searcher</h1>
            <div className='words-to-find'>
                <h5>Words you should find: {props.words.wordsToFind.toString().split(',').join(', ')}</h5>
            </div>
            <Row xs='12' className='justify-content-center text-center words-field'>
                    <Col md='2' xs='1'></Col>
                    <Col md='8' xs='10' className='align-items-center word-letters'>
                    </Col>
                    <Col md='2' xs='1'></Col>
            </Row>
            <h3 className='choosen-words'></h3>
            <button className='check' onClick={checker}>Check Answears</button>
        </div>
    );
}

export default WordSearchComponent;