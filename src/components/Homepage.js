import card from '../images/card.PNG';
import { Card, CardBody, CardImg} from 'reactstrap';
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import CardComponent from './CardComponent';

function Homepage() {
    document.body.style.backgroundImage = 'none';
    let pagetop;

    let el1 = <Row xs='12' id="myCard" className='justify-content-center text-center learning-cards shown'>
                    <Col md='4' xs='4' className='align-items-center'>
                        <Card className='home-card'>
                            <CardBody className='home-card-body'>
                                <CardImg src={card} style={{ width: '100%' }} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='8' xs='8'>
                        <Card className='home-card'>
                            <CardBody className='home-card-body'>
                                <p>Words Learning Page</p>
                                <p>Words Learning Page</p>
                                <p>Words Learning Page</p>
                                <p>Words Learning Page</p>
                                <p>Words Learning Page</p>
                                <p>Words Learning Page</p>
                                <p>Words Learning Page</p>
                                <p>Words Learning Page</p>
                            </CardBody>
                        </Card>
                    </Col>
    </Row>;

    let el2 = <Row xs='12' id="myCard" className='justify-content-center text-center learning-cards shown'>
                    <Col md='4' xs='4' className='align-items-center'>
                        <Card className='home-card'>
                            <CardBody className='home-card-body'>
                                <h1>Hello</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='8' xs='8'>
                        <Card className='home-card'>
                            <CardBody className='home-card-body'>
                                <h1>Hello</h1>
                            </CardBody>
                        </Card>
                    </Col>
    </Row>;

    const [el, setEl] = useState(el1);
    
    useEffect(() => {
        console.log(el);
    }, [el])

    window.addEventListener('scroll', () => {
        pagetop = window.scrollY;
        console.log(pagetop);

        switch (true) {
            case (pagetop < 500):
                setEl(el1);
                break;
            case (pagetop >= 500 && pagetop < 1000):
                el1 = <h1>Hello</h1>
                setEl(el1);
                break;
            case (pagetop >= 1000 && pagetop < 1500):
                el1 = <h1>Bye</h1>
                setEl(el1);
                break;
            case (pagetop >= 1500):
                setEl(el1);
        }
    });

    return(
        <div className="welcome-page">
            {/* <h1 className="content">Welcome to learning site</h1> */}
            <div className='menu-cards'>
                {el}
            </div>
        </div>
    );
}

export default Homepage;