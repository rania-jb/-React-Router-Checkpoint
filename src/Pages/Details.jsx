import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";


const Details = ({ movies }) => {
  const { Movieid } = useParams();
  const movie = movies.find((movie) => movie.id === Number(Movieid));

  return (
    
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <h5>{movie.description}</h5>
      <br/>
      <iframe
        width="800"
        height="450"
        src={movie.trailer}
        title={movie.title}
        
      ></iframe>
      <br />
      <NavLink to="/">
        <Button variant="info" style={{ marginTop: "20px" }}>Back to Home</Button>
      </NavLink>
    </div>
  );
};

export default Details;
