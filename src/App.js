import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import LessonsComponent from './components/LessonsComponent';
import PictureTestComponent from './components/PicturesTestComponent';
import HalloweenComponent from './components/HalloweenComponent';
import TableGameComponent from './components/TableGameComponent';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import field_sonic from './images/field_sonic.jpg';
import WordSearchComponent from './components/WordSearchComponent';


function App() {

  const words = {
    wordsToFind: ['Test', 'Hello', 'Bye', 'Good'],
    letters: ['T', 'E', 'S', 'T', 'H', 'E', 'L', 'L', 'O'],
    positions: [23,33,43,53, 91, 92, 93, 94, 95],
    sizeX: 10,
    sizeY: 10
  }

  return (
    <div className="App">
      <div className='cards-in-lessons'>
      <Navbar variant="dark" expand="lg" className='new-nav'>
      <Container fluid>
        <Navbar.Brand><Link to='/' className='nav-item logo'>ENG Learning</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <NavDropdown
              title="Navigation"
            >
              <NavDropdown.Item><Link to='/' className='nav-item'>Homepage</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/learning-cards' className='nav-item'>Learning Cards</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/pictures-tests' className='nav-item'>Tests with Pictures</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/halloween' className='nav-item'>Halloween</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/table-game' className='nav-item'>Table Game</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/words-searching' className='nav-item'>Words Searching</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <nav className='nav'>
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/learning-cards' className='nav-item'>Learning Cards</Link>
        <Link to='/pictures-tests' className='nav-item'>Tests with Pictures</Link>
      </nav> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/learning-cards' element={<LessonsComponent />} />
        <Route path='/pictures-tests' element={<PictureTestComponent />} />
        <Route path='/halloween' element={<HalloweenComponent />} />
        <Route path='/table-game' element={<TableGameComponent field={field_sonic}/>} />
        <Route path='/words-searching' element={<WordSearchComponent words={words}/>} />
      </Routes>
      </div>
      <nav className='footer'>
        <h4>Some Contacts Info</h4>
      </nav>
    </div>
  );
}

export default App;
