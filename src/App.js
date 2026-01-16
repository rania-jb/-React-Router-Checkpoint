import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Details from "./Pages/Details.jsx";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Stranger Things",
      description:
        "A group of kids uncover supernatural mysteries and secret government experiments.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      rating: 8.7,
      trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
    },
    {
      id: 2,
      title: "The Summer I Turned Pretty",
      description:
        "A coming-of-age romance set during unforgettable summer vacations.",
      posterURL:
        "https://tse3.mm.bing.net/th/id/OIP.xW3P2XYxvIlKhNNpbiMKFQHaLH",
      rating: 7.4,
      trailer: "https://www.youtube.com/embed/LPNs5kKeEgE",
    },
    {
      id: 3,
      title: "FROM",
      description:
        "People are trapped in a mysterious town where monsters come out at night.",
      posterURL:
        "https://image.tmdb.org/t/p/w1280/cjXLrg4R7FRPFafvuQ3SSznQOd9.jpg",
      rating: 7.8,
      trailer: "https://www.youtube.com/embed/pDHqAj4eJcM",
    },
    {
      id: 4,
      title: "Breaking Bad",
      description:
        "A chemistry teacher turns to drug manufacturing after a terminal diagnosis.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
      rating: 9.5,
      trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
    {
      id: 5,
      title: "Money Heist",
      description:
        "A criminal mastermind plans the biggest heist in modern history.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      rating: 8.2,
      trailer: "https://www.youtube.com/embed/_InqQJRqGW4",
    },
    {
      id: 6,
      title: "Game of Thrones",
      description: "Noble families fight for control of the Iron Throne.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      rating: 9.2,
      trailer: "https://www.youtube.com/embed/BpJYNVhGf1s",
    },
    {
      id: 7,
      title: "The Witcher",
      description:
        "A monster hunter struggles to survive in a brutal fantasy world.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
      rating: 8.0,
      trailer: "https://www.youtube.com/embed/ndl1W4ltcmg",
    },
    {
      id: 8,
      title: "Peaky Blinders",
      description: "A crime family rises to power in post-war England.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
    },
    {
      id: 9,
      title: "Dark",
      description: "A mind-bending time travel mystery across generations.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
      rating: 8.7,
      trailer: "https://www.youtube.com/embed/rrwycJ08PSA",
    },
    {
      id: 10,
      title: "The Boys",
      description: "Vigilantes fight corrupt superheroes abusing their fame.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
      rating: 8.7,
      trailer: "https://www.youtube.com/embed/tcrNsIaQkb4",
    },
    {
      id: 11,
      title: "Euphoria",
      description: "Teenagers navigate addiction, trauma, and identity.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg",
      rating: 8.4,
      trailer: "https://www.youtube.com/embed/-1UJJPAWudQ",
    },
    {
      id: 12,
      title: "Squid Game",
      description: "Contestants risk their lives in deadly games for money.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: 8.0,
      trailer: "https://www.youtube.com/embed/oqxAJKy0ii4",
    },
    {
      id: 13,
      title: "Vikings",
      description: "The legendary saga of Ragnar Lothbrok and the Vikings.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
      rating: 8.5,
      trailer: "https://www.youtube.com/embed/9GgxinPwAGc",
    },
    {
      id: 14,
      title: "Lucifer",
      description: "The Devil leaves Hell to help solve crimes in Los Angeles.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
      rating: 8.1,
      trailer: "https://www.youtube.com/embed/X4bF_quwNtw",
    },
    {
      id: 15,
      title: "The Walking Dead",
      description: "Survivors face a zombie apocalypse and human conflict.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
      rating: 8.1,
      trailer: "https://www.youtube.com/embed/sfAc2U20uyg",
    },
  ]);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSearch={setSearch}
              setRating={setRating}
              setMovies={setMovies}
              movies={movies}
              search={search}
              rating={rating}
            />
          }
        />
        <Route path="/details/:Movieid" element={<Details movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
