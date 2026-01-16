import React from 'react';
import { Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({id,title, description, posterURL, rating}) => {
  const navigate= useNavigate();
  const goToDetails=()=>{
    navigate(`/details/${id}`);
  }
  return (
    <div>
      <Card style={{ width: '18rem' , cursor : "pointer"}} onClick={goToDetails}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          ⭐{rating}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MovieCard;
