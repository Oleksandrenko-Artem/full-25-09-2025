import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSportByIdAsync } from '../store/sportsSlice';
import CONSTANTS from '../constants';

const Sport = () => {
    const { sportId } = useParams();
    const dispatch = useDispatch();
    const { selectedSport, isLoading, error } = useSelector((state) => state.sports);
    useEffect(() => {
        dispatch(fetchSportByIdAsync(sportId));
    }, [dispatch, sportId]);
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    if (!selectedSport) {
        return <p>Sport isn't available</p>
    }
    return (
        <section>
            <h2>{selectedSport?.name}</h2>
            <img src={`${CONSTANTS.API_BASE_URL}${selectedSport?.image}`} alt={selectedSport?.name} />
        </section>
    );
}

export default Sport;