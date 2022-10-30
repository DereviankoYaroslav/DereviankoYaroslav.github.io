import player1 from '../images/player1.png';
import player2 from '../images/player2.png';
import side1 from '../images/Alea_1.png';
import side2 from '../images/Alea_2.png';
import side3 from '../images/Alea_3.png';
import side4 from '../images/Alea_4.png';
import side5 from '../images/Alea_5.png';
import side6 from '../images/Alea_6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function TableGameComponent(){

    const downArrow = <FontAwesomeIcon className={'toggle-icon-game'} icon={faChevronDown} />
    const upArrow = <FontAwesomeIcon className={'toggle-icon-game hidden'} icon={faChevronUp} />

    const dice = [side1, side2, side3, side4, side5, side6];
    const [die1, setDie1] = useState();

    const field = 'https://previews.123rf.com/images/iimages/iimages1411/iimages141100471/33852282-zoo-juego-de-mesa-tem%C3%A1tica-con-los-n%C3%BAmeros.jpg';

    const throwDice = () => {
        setDie1(dice[Math.floor(Math.random()*6)]);
        let myGame = document.getElementsByClassName('cubes');
        myGame[0].classList.remove('hidden');
    }
    

    function playerControl (event){
        console.log(event.target.id);
        const ball = document.getElementById(event.target.id);
        ball.style.position = 'absolute';
        ball.style.zIndex = 1000;
      
        // move it out of any current parents directly into body
        // to make it positioned relative to the body
      
        // centers the ball at (pageX, pageY) coordinates
        function moveAt(pageX, pageY) {
          ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
          ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
        }
      
        // move our absolutely positioned ball under the pointer
        moveAt(event.pageX, event.pageY);
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // (2) move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // (3) drop the ball, remove unneeded handlers
        ball.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          ball.onmouseup = null;
          ball.style.zIndex = 500;
        };

        ball.ondragstart = function() {
            return false;
        };
    };

    const lessonsBar = () => {
        let myGame = document.getElementsByClassName('game');
        myGame[0].classList.toggle('hidden');
        let myToggle = document.getElementsByClassName('toggle-icon-game');
        for (let i = 0; i < myToggle.length; i++){
            myToggle[i].classList.toggle('hidden');
        }
    };

    return(
        <div className='game-div'>
            <h2 className='lesson-next' onClick={lessonsBar}>Table Game{downArrow}{upArrow}</h2>
            <div className='game hidden'>
                <img className='field' alt='field' src={field}></img>
                <img id='fishka1' className='my-player' src={player1} alt='player1' onMouseDown={playerControl}></img>
                <img id='fishka2' className='my-player' src={player2} alt='player2' onMouseDown={playerControl}></img>
                <button className='throw-button' onClick={throwDice}>Throw the cube</button>
                <div className='cubes hidden'>
                    <img className='cube' alt='cube' src={die1}/>
                </div>
            </div>
        </div>
    );
}

export default TableGameComponent;