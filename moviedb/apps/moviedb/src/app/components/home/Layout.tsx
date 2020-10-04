import React, { Component } from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import MoviesContainer from './MoviesContainer';

export class Layout extends Component {
    render() {
        return (
            <div>
                <SearchForm/> 
                <MoviesContainer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Layout);
