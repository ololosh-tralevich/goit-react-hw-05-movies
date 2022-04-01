import PropTypes from 'prop-types';

import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";

const HomePage = ({filmIdFunc}) => {
    return(
        <TrendingMovies filmIdFunc={filmIdFunc}/>
    )
}

export default HomePage;

HomePage.propTypes = {
    filmIdFunc: PropTypes.func.isRequired
}