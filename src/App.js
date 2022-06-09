

import React,{useState,useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import {BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom';
import NavbarReact from './Login/NavbarReact';


const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=94e7242618f2cd605dc21e4d750ee0fc"
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=94e7242618f2cd605dc21e4d750ee0fc&query";


function App() {
  let navigate = useNavigate()
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');
  
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })

  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=94e7242618f2cd605dc21e4d750ee0fc&query=${query}`; // state variable attribute
      const res= await fetch(url);
      const data= await res.json();
      //console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

function logout_Function(){
  navigate("/logout")
}

  return (
    <div>

     <NavbarReact />
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand >Movie</Navbar.Brand>
        <Navbar.Brand >Trending 2021</Navbar.Brand>
        <button onClick={logout_Function}>LOGOUT</button>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle> 

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
              <Button className='mx-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person " viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg><span>0</span></Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
   
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
    </div>
   
  );
}

export default App;

