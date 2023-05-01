/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Characters from './Characters';
import Paginar from './Paginar';


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCaracters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));

  };

  const onPrevious = () => {
    fetchCaracters(info.prev);
  }

  const onNext = () => {
    fetchCaracters(info.next);
  }

  useEffect(() => {
    fetchCaracters(url)
  }, [])

  return (
    <>
      <Navbar brand="Rich and Morty" />
      <div className="container mt-5">

        <Paginar prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters}
        />
        <Paginar prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext} />
      </div>
    </>
  )
}

export default App;
