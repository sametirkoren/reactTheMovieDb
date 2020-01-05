import React from 'react';

// import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => (
    <React.Fragment>
        <HeroImage/>
        <SearchBar/>
        <Grid/>
        <MovieThumb/>
        <Spinner/>
        <LoadMoreBtn/>
    </React.Fragment>
)

export default Home;