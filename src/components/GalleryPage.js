import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const GalleryPage = ({ photos }) => {
  const chunkSize = 3;

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const photoChunks = chunkArray(photos, chunkSize);

  return (
    <Container className="mt-4">
      <h2>Gallery</h2>
      {photoChunks.map((chunk, index) => (
        <Row key={index} className="mb-4">
          {chunk.map((photo, photoIndex) => (
            <Col key={photoIndex} md={4} className="mb-4">
              <Image src={photo} alt={`Photo ${index * chunkSize + photoIndex}`} fluid />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default GalleryPage;
