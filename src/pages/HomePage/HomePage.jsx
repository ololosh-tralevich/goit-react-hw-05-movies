import PropTypes from 'prop-types';

import MainPage from "../../components/Movies/MainPage";

const HomePage = ({filmIdFunc}) => {
    return(
        <MainPage filmIdFunc={filmIdFunc}/>
    )
}

export default HomePage;

HomePage.propTypes = {
    filmIdFunc: PropTypes.func.isRequired
}