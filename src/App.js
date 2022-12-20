import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import LessonsComponent from './components/LessonsComponent';
import PictureTestComponent from './components/PicturesTestComponent';
import HalloweenComponent from './components/HalloweenComponent';
import TableGames from './components/TableGames';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import WordSearchComponent from './components/WordSearchComponent';


function App() {

  const words = {
    wordsToFind: ['Table','Cutting_Board', 'Refrigerator', 'Freezer', 'Paper_Towel', 'Microwave_Oven', 'Dishwasher', 'Sink', 'Chair', 'Oven', 'Wastebin', 'Toaster', 'Cupboard'],
    sizeX: 20,
    sizeY: 20
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
              <NavDropdown.Item><Link to='/table-games' className='nav-item'>Table Games</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/words-searching' className='nav-item'>Words Searching</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/learning-cards' element={<LessonsComponent />} />
        <Route path='/pictures-tests' element={<PictureTestComponent />} />
        <Route path='/halloween' element={<HalloweenComponent />} />
        <Route path='/table-games' element={<TableGames />} />
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
