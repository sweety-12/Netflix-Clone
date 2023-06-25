// import axios from "axios";
import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  getUserLikedMovies } from '../store';
//import NotAvailable from '../components/NotAvailable';
//import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import styled from 'styled-components';
//import SelectGenre from '../components/SelectGenre';
import Card from '../components/Card';

export default function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const  movies = useSelector((state) => state.netflix.movies);
    const dispatch = useDispatch();
    const [email, setEmail] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (currentUser) => {
            if(currentUser) setEmail(currentUser.email);
            else navigate("/login");
           });
    }, []);
     

    useEffect(() =>{ 
     if(email) {
        dispatch(getUserLikedMovies(email));
     }
     else{
        console.log("my list me nhi jaa paa rha");
     }
    }, [email, dispatch]); 


    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false: true);
      return () => (window.onscroll = null);
    };

       return (
       <Container>
        <Navbar isScrolled={isScrolled}/>
        <div className='content flex column'>
            <h1> My list</h1>
            <div className='grid flex'>
            
                {movies && movies.map((movie, index) => {
                return(
                <Card 
                  movieData={movie}
                  index={index}
                  key={`${movie.id}-${index}`}
                  isLiked={true}
                 />
                );
                })}

            </div>
        </div>
       </Container>
    );
}

const Container = styled.div`
   .content {
    margin: 2.3rem;
    margin-top : 8rem;
    gap: 3rem;
    h1{
        margin-left : 3rem;
    }
    .grid{
        flex-wrap: wrap;
        gap :1rem;
    }
   }
`;
