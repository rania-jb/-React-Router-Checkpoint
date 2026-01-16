import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Details = ({ movies }) => {
  const { Movieid } = useParams();
  const movie = movies.find((movie) => movie.id === Number(Movieid));

  return (
    
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <p style={{fontFamily :"-moz-initial" , fontSize :"20px"}}>{movie.description}</p>
      <iframe
        width="800"
        height="450"
        src={movie.trailer}
        title={movie.title}
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">
        <Button variant="info" style={{ marginTop: "20px" }}>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Details;
