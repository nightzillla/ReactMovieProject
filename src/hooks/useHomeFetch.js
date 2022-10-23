// This is a custom hooks
// When making custom hooks always use "use" in front of it. example useHomeFetch
import { useState, useEffect, useRef } from 'react';
// API
import API from '../API';

// This is the initial state of your component. This is where you API information goes into after the API request is finished
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await  API.fetchMovies(searchTerm, page);
            
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        }   catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // Initial and search
    useEffect(() => { 
    // this will clear the search
     setState(initialState);
    // this search the first page
     fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // This is what will load new pages
    // Load more
    useEffect(() => {
        if(!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false);
    },[isLoadingMore, searchTerm, state.page])

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}