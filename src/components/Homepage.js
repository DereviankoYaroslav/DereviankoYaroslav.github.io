import card from '../images/card.PNG';
import { Card, CardBody, CardImg} from 'reactstrap';
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

function Homepage() {
    document.body.style.backgroundImage = 'none';
    let pagetop;

    const handleScroll = () => {

        const y = 70;

        pagetop = window.scrollY+window.screen.availHeight;
        console.log(pagetop);
        console.log(document.getElementById('card1').offsetHeight);
        const first = document.getElementById('card1').offsetHeight + 250;

        switch (true) {
            case (pagetop < first):
                console.log('Section1');
                break;
            case (pagetop >= first && pagetop < first+(document.getElementById('card1').offsetHeight + y)):
                console.log('Section2');
                break;
            case (pagetop >= first+(document.getElementById('card1').offsetHeight + y) && pagetop < first+2*(document.getElementById('card1').offsetHeight + y)):
                console.log('Section3');
                break;
            case (pagetop >= first + 2 * (document.getElementById('card1').offsetHeight + y)):
                console.log('Section4');
                break;
            default:

        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <div className="welcome-page">
            <h1 className="content">Welcome to learning site</h1>
            <div className='menu-cards'>
                <Row xs='12' className='justify-content-center text-center learning-cards' id='card1'>
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='menu-cards'>
                <Row xs='12' className='justify-content-center text-center learning-cards' id='card2'>
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
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='4' xs='4' className='align-items-center'>
                        <Card className='home-card'>
                            <CardBody className='home-card-body'>
                                <CardImg src={card} style={{ width: '100%' }} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='menu-cards'>
                <Row xs='12' className='justify-content-center text-center learning-cards' id='card3'>
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='menu-cards'>
                <Row xs='12' className='justify-content-center text-center learning-cards' id='card4'>
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
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='4' xs='4' className='align-items-center'>
                        <Card className='home-card'>
                            <CardBody className='home-card-body'>
                                <CardImg src={card} style={{ width: '100%' }} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Homepage;