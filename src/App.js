import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GalleryPage from './components/GalleryPage';

const App = () => {
  const [photos, setPhotos] = useState([]);

  const handleAddPhotos = (photoUrls) => {
    setPhotos([...photos, ...photoUrls]);
  };

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            Photography Website
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={<Dashboard onAddPhotos={handleAddPhotos} />}
          />
          <Route
            path="/gallery"
            element={<GalleryPage photos={photos} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;