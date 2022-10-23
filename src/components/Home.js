import React from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading , error, searchTerm, setSearchTerm } = useHomeFetch();
 

    return(
        <>

        {/* this will not load heroImage when making a new search !searchTerm 
        use this if you dont want to show newsearch heroImage when searching 
        {!searchTerm && state.results[0] ?}
        */}
        {state.results[0] ? (
        <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].title}
            text={state.results[0].overview}
        /> 
        ): null} 
        <SearchBar setSearchTerm={setSearchTerm}/>
        {/* .map gets the movie titles  
        added searchTerm will change from popular movies when making a new search
        */}
        <Grid header={searchTerm ? 'Search Result' :'Popular Movies'}>
           {state.results.map(movie => (
            <Thumb
                key={movie.id}
                clickable
                image={
                    movie.poster_path 
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage 
                }
                movieId={movie.id}
                />
           ))} 
        </Grid>
        <Spinner />
        </>
    );
};

export default Home; 
