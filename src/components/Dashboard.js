import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ onAddPhotos }) => {
  const [files, setFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    if (files.length > 0) {
      const promises = files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(promises).then((results) => {
        onAddPhotos(results);
        setSuccessMessage('Photos successfully added!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
        setFiles([]);
        navigate('/gallery');
      });
    }
  };

  return (
    <Container className="mt-4">
      <h2>Upload Photos</h2>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose photos:</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} multiple />
        </Form.Group>
        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
        {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
      </Form>
    </Container>
  );
};

export default Dashboard;
