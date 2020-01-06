import React from 'react';


// Components Hook

import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';


import {useMovieFetch} from './hooks/useMovieFetch';

const Movie = ({movieId}) => {

    const [movie , loading ,error] = useMovieFetch(movieId);
    
    if(error) return <div>Bir şeyler ters gitti...</div>
    if(loading) return <Spinner/>;

    return (
        <>
            <Navigation movie={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar/>
            <Grid>
                <Actor/>
            </Grid>
           
        </>
    )
} 
   

export default Movie;